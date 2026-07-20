-- Get instructors assisted class with number
SELECT 
  i.name AS instructor, 
  c.name AS class,
  COUNT(ar.id) AS total_assistances
FROM instructors i
JOIN assistance_requests ar ON i.id = ar.instructor_id
JOIN students s ON ar.student_id = s.id
JOIN classes c ON s.class_id = c.id
WHERE c.name = 'JUL02'
GROUP BY i.name, c.name
ORDER BY instructor;