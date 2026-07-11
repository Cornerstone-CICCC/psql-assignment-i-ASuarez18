-- Get total time assignments per class
SELECT c.name AS class_name, SUM(a.duration) AS total_time
FROM students s
JOIN assignment_submissions a ON s.id = a.student_id
JOIN classes c ON s.class_id = c.id
WHERE c.name = 'FEB12'
GROUP BY c.name;