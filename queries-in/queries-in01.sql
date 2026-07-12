--  Get total assistance requests instructor
SELECT COUNT(ar.id) as total_assistances, i.name as instructor_name
FROM instructors i
JOIN assistance_requests ar ON i.id = ar.instructor_id
WHERE i.name = 'Waylon Boehm'
GROUP BY instructor_name
ORDER BY total_assistances DESC;