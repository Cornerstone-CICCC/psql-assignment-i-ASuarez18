-- Get classes more 18 students
SELECT c.name AS class_name, count(*) AS total_students
FROM classes c
JOIN students s ON c.id = s.class_id
GROUP BY class_name
HAVING count(*) >= 18
ORDER BY total_students;