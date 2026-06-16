# Exercise - SQL Assignment - Day 1

# Instructions

This assignment has tests to verify if your answers are right.
It's necessary to install the libraries to use the tests.

To do that, install all dependencies using the command below:

```bash
npm install
```

Before running the test you need to set up your environment variable (.env).

Copy the sample environment variables file to create your own `.env` file:

```bash
$ cp .env.example .env
```

Open your .env file and update the variables:

```json
    DB_USER= 'your psql user'
    DB_HOST= 'localhost'
    DB_DATABASE= 'name of your database'
    DB_PASSWORD= ''
    DB_PORT=5432
```

To run all the tests you need to use the script test:

```bash
npm run test
```

If you want to run a specific test use the follow command:

```bash
npm test <file>
```

If you want to run the all the tests inside of a specific test folder:

```bash
npm test:<folderName>
```

## Setup

Follow the steps to do the assignment.

Please note that the exercise assumes that your `psql` is already up and running.

1. Create a new database called `week_assignment` or whatever you want to call our app using `psql`.

2. Create the tables for our `students` and `classes` entities.

   - Create a folder called `migrations` within the `week_assignment` folder.
   - Inside `migrations`, create a file called `01_students_classes.sql`.
   - Write the SQL queries to create the tables for the `students` and `classes` entities. Use the ERD to help (README.MD in the root).
   - From your psql session, type `\i migrations/students_classes.sql` to execute the file.
   - Now enter `\dt` into your psql session to make sure the two tables have been created.

   Obs.: use the command `\cd + path of the project` to change the directory and then you can use the `\i` to execute the file.

3. Import the students' and classes' data from the `seeds` folder into the database.

   - From your psql session, type `\i seeds/students_seeds.sql` to execute the file.
   - Do the same for classes.
   - Now enter `SELECT count(*) FROM students;` and `SELECT count(*) FROM classes;` into your psql session to make sure the students and classes have been imported.

4. Commit all your changes and push them to GitHub.

## Queries

**Queries 01**: Get all students without a Github username.

- Use the file `queries01.sql` in the `queries` folder to create the query.
- Show only `id`, `name`, `email` and `class_id` columns.
- Order them by `class_id`.
- Execute the file and check the results.

**Queries 02**: Get all students in a specific class.

- Use the file `queries02.sql` in the `queries` folder to create the query.
- Show only `id` and `name` columns.
- Order them by their name in alphabetical order.
- Since this query needs to work with any specific class, just use any number for the class_id.
- Execute the file and check the results.

**Queries 03**: Select the total number of students who were in the first 3 classes.

- Use the file `queries03.sql` in the `queries` folder to create the query.

**Queries 04**: Get all of the students that don't have an email or phone number.

- Use the file `queries04.sql` in the `queries` folder to create the query.

**Queries 05**: Get all of the students without a `gmail.com` account and a phone number.

- Use the file `queries05.sql` in the `queries` folder to create the query.

**Queries 06**: Get all of the students currently enrolled.

- Use the file `queries06.sql` in the `queries` folder to create the query.
- Get their `name`, `id` and `class_id`.
- Order them by `class_id`.

**Queries 07**: Get all graduates without a linked Github account.

- Use the file `queries07.sql` in the `queries` folder to create the query.
  - Get their `name`, `email` and `phone`.

## Preparing next assignment day:

1. Write the CREATE TABLE statements for the assignments and a assignment_submissions tables.

   - Create a file called `02_assignments_assignment_submissions.sql` in the `migrations` folder.
   - Write the SQL queries to create the tables for the `assignments` and `assignment_submissions` entities. Use the ERD to help.
   - From your psql session, type `\i migrations/assignments.sql` to execute the file.
   - Now enter `\dt` into your psql session to make sure the two tables have been created.

2. Import the assignments' and assignment submissions' data from the `seeds` folder into the database.

   - From your psql session, type `\i seeds/assignments_seeds.sql` to execute the file.
   - Do the same for assignment submissions.
   - Now enter `SELECT count(*) FROM assignments;` and `SELECT count(*) FROM assignment_submissions;` into your psql session to make sure the students and classes have been imported.

3. Commit and push your changes to GitHub.
