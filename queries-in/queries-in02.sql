-- Get total assistance per student
SELECT  COUNT(ar.id) AS total_assistances, s.name AS student_name
FROM students s
JOIN assistance_requests ar ON s.id = ar.student_id
WHERE s.name = 'Elliot Dickinson'
GROUP BY student_name
ORDER BY total_assistances DESC;