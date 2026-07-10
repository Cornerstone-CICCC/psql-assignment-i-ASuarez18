-- Get Students with Class Name
SELECT s.name AS student_name, s.email, c.name AS class_name
FROM students s
JOIN classes c ON s.class_id = c.id;