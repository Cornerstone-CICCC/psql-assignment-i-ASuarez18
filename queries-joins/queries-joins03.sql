-- Get rollover students
SELECT s.name AS student_name, c.name AS class_name, s.start_date AS student_start_date, c.start_date AS class_start_date
FROM students s
JOIN classes c ON s.class_id = c.id
WHERE s.start_date != c.start_date
ORDER BY c.start_date;