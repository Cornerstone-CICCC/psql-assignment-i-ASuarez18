-- Get enrolled students average time completion
SELECT s.name as student_name, AVG(duration) as average_time
FROM students s
JOIN assignment_submissions asb ON s.id = asb.student_id
WHERE s.end_date IS NULL
GROUP BY student_name
ORDER BY average_time DESC;