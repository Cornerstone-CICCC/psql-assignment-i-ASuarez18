-- Get total submissions per class
SELECT c.name as class_name, count(*) as total_submissions 
FROM classes c
JOIN students s ON c.id = s.class_id
JOIN assignment_submissions asb ON s.id = asb.student_id
GROUP BY class_name
ORDER BY total_submissions DESC;