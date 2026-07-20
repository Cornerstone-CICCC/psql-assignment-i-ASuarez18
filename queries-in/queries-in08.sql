-- Get total assistance requests class
SELECT 
  c.name AS class, 
  SUM(ar.completed_at - ar.started_at) AS total_duration
FROM assistance_requests ar
JOIN students s ON ar.student_id = s.id
JOIN classes c ON s.class_id = c.id
GROUP BY c.name
ORDER BY total_duration ASC;