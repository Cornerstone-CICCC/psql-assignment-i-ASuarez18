-- Get enrolled students average time completion less estimated
SELECT s.name as student_name, AVG(asb.duration) as average_time, AVG(a.duration) AS average_estimated_time
FROM students s
JOIN assignment_submissions asb ON s.id = asb.student_id
JOIN assignments a ON a.id = asb.assignment_id
WHERE s.end_date IS NULL
GROUP BY student_name
HAVING AVG(asb.duration) < AVG(a.duration)
ORDER BY average_time ASC;