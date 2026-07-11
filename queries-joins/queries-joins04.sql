-- Get total time assignments per student
SELECT s.name AS student_name, SUM(a.duration) AS total_time
FROM students s
JOIN assignment_submissions a ON s.id = a.student_id
WHERE s.name = 'Ibrahim Schimmel'
GROUP BY s.name;