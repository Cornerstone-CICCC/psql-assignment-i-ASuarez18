# Exercise - SQL Assignment - Day 2

## Queries-joins

**Queries-joins 01:** Create a query to get all students and combine with their class name. (JOIN)

- Use the file `queries-joins01.sql` in the `queries-joins` folder to create the query.
- Show only `student_name`, `email` and `class_name` columns.

**Queries-joins 02:** Create the same query but getting only students that are enrolled. (INNER JOIN)

- Use the file `queries-joins02.sql` in the `queries-joins` folder to create the query.

Obs: Execute the same query but replace the `INNER JOIN` with `LEFT JOIN`, `RIGHT JOIN` and `FULL JOIN`. Test all the cases and try to identify what is the difference between them.

**Queries-joins 03:** Create a query to get all rollover students (A rollover refers to students who start on a different date than the official class start date. So, students that have a start_date different than the class start_date).

- Use the file `queries-joins03.sql` in the `queries-joins` folder to create the query.
- Show only `student_name`, `class_name`, student's `start_date` and class' `start_date` columns.
- Change the name of the columns to `student_start_date` and `class_start_date`.
- Order them by `class_start_date`.

**Queries-joins 04:** Get the total amount of time that a student has
spent on all assignments.

- Use the file `queries-joins04.sql` in the `queries-joins` folder to create the query.
- Show only `total_time` column.
- This should work for any student but use `Ibrahim Schimmel` for now.

**Queries-joins 05:** Get the total amount of time that all students from a specific class have spent on all assignments.

- Use the file `queries-joins05.sql` in the `queries-joins` folder to create the query.
- Show only `total_time` column.
- This should work for any class but use `FEB12` for now.
- You can write as many JOIN statements as you need in a single query.

**Commit and push your changes to GitHub.**

**Queries-joins 06:** If we want to calculate the total number of `assignment_submissions` for all students, the count aggregate function is perfect.

- Use the file `queries-joins06.sql` in the `queries-joins` folder to create the query.

```sql
SELECT count(assignment_submissions.*) as total_submissions
FROM assignment_submissions;
```

But what if we wanted to calculate the total number of `assignment_submissions` for **each** student individually, and output the totals next to the student's name?

We want to apply the `count()` function to **groups** of data, rather than the entire query. The groups in this case are the names of students. We want to apply the `count()` function for each `students.name`.

We will start by selecting the student's name from the `students` table, and the and the total submissions from the `assignment_submissions` table.

```sql
SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id;
```

Now we just need to tell SQL that we want `count(assignment_submissions.*)` to be run for each `students.name`, instead of the entire query. To do this, we use the `GROUP BY` clause.

```sql
SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
GROUP BY students.name;
```

> Run this query and after that, alter the query slightly to only return currently enrolled students. A currently enrolled student has a null end_date.

**Queries-joins 07:** Now that we know how to get the total submissions for currently enrolled students, let's refine the query a bit more. Let's only return currently enrolled students who's total submissions are less than 100.

- Use the file `queries-joins07.sql` in the `queries-joins` folder to create the query.

> The `HAVING` clause is like `WHERE` but works on aggregated data. Our `WHERE` clause works on normal data students.end_date and our `HAVING` clause works on the aggregated data `count(assignment_submissions.*)`.

## Queries-group-by

Use the files inside of the folder `queries_group-by` to do the next queries.

**Queries-group-by 01:** Get the total number of assignments for each day of class.

- Use the file `queries-group-by01.sql` in the `queries-group-by` folder to create the query.
- Show only `day`, `total_assignments` columns.
- Order them by `day`.
- This query only requires the `assignments` table.

**Queries-group-by 02:** Get the total number of assignments for each day of class (the same query as before), but only return rows where total assignments is greater than or equal to `10`.

- Use the file `queries-group-by02.sql` in the `queries-group-by` folder to create the query.
- Show only `day`, `total_assignments` columns.
- Order them by `day`.
- This query only requires the `assignments` table.

**Queries-group-by 03:** Get all class with 18 or more students.

- Use the file `queries-group-by03.sql` in the `queries-group-by` folder to create the query.
- Show only `class_name`, `total_students` columns.
- Order them by `total_students` from smallest to greatest.

**Queries-group-by 04:** Get the total number of assignment submissions for each class.

- Use the file `queries-group-by04.sql` in the `queries-group-by` folder to create the query.
- Show only `class_name`, `total_submissions` columns.
- Order them by `total_submissions` from greatest to least submissions.

**Queries-group-by 05:** Get currently enrolled students' average assignment completion time.

- Use the file `queries-group-by05.sql` in the `queries-group-by` folder to create the query.
- Show only `student_name`, `average_time` columns.
- Order them by `average_time` from greatest to least duration.
- A student will have a null `end_date` if they are currently enrolled

**Queries-group-by 06:** Get the students who's average time it takes to complete an assignment is less than the average estimated time it takes to complete an assignment.

- Use the file `queries-group-by06.sql` in the `queries-group-by` folder to create the query.
- Show only `student_name`, `average_time`, `average_estimated_time` columns.
- Order them by `average_time` from least to greatest duration.
- Only get enrolled students.
- This will require data from `students`, `assignment_submissions`, and `assignments`.

## Walkthrough:

Lets say we want to get the total number of incomplete assignments for a specific student. We could calculate this by taking the total number of submissions for a student and subtracting that from the total number of assignments that exist.

```sql
SELECT count(assignments) - count(assignment_submissions)
...
WHERE students.name = 'Ibrahim Schimmel';
```

This query requires the use of a three different tables, so our first thought might be to just JOIN all of the tables together.

Joining `students` to `assignment_submissions` makes sense, since we only want submissions for a specific student. But we don't really want to join `assignments`, we just want the total number of entries in that table.

The `count(assignments)` part is separate to the rest of the query. In fact, it's so separate that we could write these out as two different queries.

```sql
SELECT count(*)
FROM assignments;
```

```sql
SELECT 424-count(assignment_submissions)
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
```

But hard coding the value 424 is bad. What if the total number of assignments changes? Luckily for us, we can use a sub query here. A sub query is a ....

```sql
SELECT (
  SELECT count(assignments)
  FROM assignments
)-count(assignment_submissions) as total_incomplete
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
```

> Run this query.

If a query returns a single value, we can use it in our `SELECT` statement just like any other value.

```sql
SELECT (
  SELECT count(*)
  FROM table_name
) as total, other_column
FROM other_table_name
ORDER BY total;
```

So we could do something like this:

```sql
SELECT * FROM (
  SELECT something_id
  FROM someTable
  WHERE something
) as sub_table;
```

Now imagine that we want to calculate the average number of students that attend a class. We can calculate the total number of students for each class with the following query.

```sql
SELECT count(students)
FROM students
JOIN classes on classes.id = class_id
GROUP BY classes;
```

> Enter this query

But how do we get a single number for the average number of students per class?

```sql
SELECT avg(count(students))
FROM students
JOIN classes on classes.id = class_id
GROUP BY classes;
```

> Enter this query

We get an error.

This query doesn't work and is a little bit difficult to read. Luckily for us, the result of our first query can be used as a table in our FROM clause. If we run the first query...

```sql
SELECT count(students) as total_students
FROM students
JOIN classes on classes.id = class_id
GROUP BY classes;
```

Our results look like a table with a single column `total_students`

| total_students |
| -------------- |
| 18             |
| 11             |
| 19             |
| 14             |

If we treat this as a table, we essentially want to find the average of the `total_students` column.

```sql
SELECT avg(total_students) as average_students
FROM (
SELECT count(students) as total_students
FROM students
JOIN classes on classes.id = class_id
GROUP BY classes
) as totals_table;
```

The `as totals_table` part gives an alias to the sub query so that we can use it's name like we would use any other table's name. For example, the first line of that query could be written like this:

```sql
SELECT avg(totals_table.total_students) as average_students
```

In this case, the inner query can contain as many columns as we like:

```sql
SELECT avg(total_students) as average_students
FROM (
  SELECT count(students) as total_students, classes.name as class_name
  FROM students
  JOIN classes on classes.id = class_id
  GROUP BY classes.name
) as totals_table;
```

A sub query's results can also be used within the `WHERE` clause of a query. This is perhaps the most common way of using a sub select.

Let's say we wanted to get the name of all **incomplete** assignments for a student. It's a fairly simple query to get all **completed** assignments for a student.

```sql
SELECT assignment_id
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
```

> Enter this query

This query essentially returns a list of ids. These ids represent all completed assignments for this specific student. We could actually re write the results as a list of ids.

```sql
(1, 2, 3, 4, 5, ...)
```

Given this list of ids, we just need get the names of all assignments with an id that doesn't exist in this list.

```sql
SELECT assignments.name
FROM assignments
WHERE id NOT IN (1, 2, 3, 4, 5, ...)
```

If we had the complete list here, this query would work. It would return the name of all of the assignments not completed by `'Ibrahim Schimmel'`. However, we're cheating here because we're hard coding the list.

If the result of a query returns only one column, we can use that sub query in our `WHERE` clause.

```sql
SELECT assignments.name
FROM assignments
WHERE id NOT IN
(
  SELECT assignment_id
  FROM assignment_submissions
  JOIN students ON students.id = student_id
  WHERE students.name = 'Ibrahim Schimmel'
);
```

> Run this query

This will return the name of all assignments not completed by 'Ibrahim Schimmel'.

## Setup for Queries-in:

**Step 1:** A `student` can create many `assistance_requests` and an `instructor` can respond to many `assistance_requests`. Create the ERD for these two entities. You can follow the attributes from the `README` file.

**Step 2:** Write the CREATE TABLE statements for the `assistance_requests` and `instructors` tables.

- Inside `migrations`, create a file called `instructors_assistance_requests.sql`.
- Write the CREATE TABLE statements for the `assistance_requests` and `instructors` tables.

**Step 3:** From psql, type `\i migrations/instructors_assistance_requests.sql` to run the migration.

**Step 4:** Now enter `\dt` to see the new tables.

**Step 5:** Import `instructors_seeds.sql` and `assistance_requests_seeds.sql` to seed the database.

**Step 6:** Commit and push your changes.

**Queries-in 01:** Get the total number of assistance requests for an instructor.

- Use the file `queries-in01.sql` in the `queries-in` folder to create the query.
- Select the instructor's name and the total assistance requests.
- Since this query needs to work with any specific instructor name, use `'Waylon Boehm'` for the instructor name.

**Queries-in 02:** Get the total number of assistance requests for a student.

- Use the file `queries-in02.sql` in the `queries-in` folder to create the query.
- Select the student's name and the total assistance requests.
- Since this query needs to work with any specific student name, use `'Elliot Dickinson'` for the student name.

**Queries-in 03:** Get important data about each assistance request.

- Use the file `queries-in03.sql` in the `queries-in` folder to create the query.
- Select the instructor's name, the student's name, assignment's name and the duration of the assistance request.
- Subtract `completed_at` by `started_at` to find the duration.
- Order by duration of the request.

**Queries-in 04:** Get the average time of an assistance request.

- Use the file `queries-in04.sql` in the `queries-in` folder to create the query.
- Select just a single row here and name it `average_assistance_request_duration`.
- In Postgres, we can subtract two timestamps to get the duration of the request.

**Queries-in 05:** Get the average duration of assistance requests for each class.

- Use the file `queries-in05.sql` in the `queries-in` folder to create the query.
- Select the class name and the average duration of the assistance requests.
- Order the results from shortest to longest duration.

**Queries-in 06:** Get the class with the longest average duration of assistance requests.

- Use the file `queries-in06.sql` in the `queries-in` folder to create the query.
- Same requirements as the previous query, but only return the single row with the longest average.

**Queries-in 07:** Calculate the average time it takes to start an assistance request.

- Use the file `queries-in07.sql` in the `queries-in` folder to create the query.
- Return a single column here.

**Queries-in 08:** Get the total duration of all assistance requests for each class.

- Use the file `queries-in08.sql` in the `queries-in` folder to create the query.
- Select the class name and the total duration of the assistance requests.
- Order the results from shortest to longest duration.
- Look at the ERD to see how to join the tables.

**Queries-in 09:** Calculate the average total duration of assistance requests for each class.

- Use the file `queries-in09.sql` in the `queries-in` folder to create the query.
- Use the previous query as a sub query.
- Return a single row `average_total_duration`.

**Queries-in 10:** List each assigment with the total number of assistance requests with it.

- Use the file `queries-in10.sql` in the `queries-in` folder to create the query.
- Select the assignment's id, day, chapter, name and the total assistances.
- Order by total assistances in order of most to least.

**Queries-in 11:** Get each day with the total number of assignments and the total duration of assignments.

- Use the file `queries-in11.sql` in the `queries-in` folder to create the query.
- Select the day, total assignments and total duration.
- Order results by the day.

**Queries-in 12:** Get the name of all instructors that performed an assistance request during a class.

- Use the file `queries-in12.sql` in the `queries-in` folder to create the query.
- Select the instructor's name and class name.
- Don't repeat the same instructor's name for the same class.
- Order by the instructor's name.
- This query needs to select data for a class with a specific name, use `'JUL02'` for the class' name here.

**Queries-in 13:** Perform the same query as before, but include the number of assistances as well.

- Use the file `queries-in13.sql` in the `queries-in` folder to create the query.

You finished the assignment! Congrats! 🎉

Commit and push your changes. 🫶🏻
