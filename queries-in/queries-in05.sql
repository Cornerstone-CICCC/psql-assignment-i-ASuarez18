-- Get avg duration assistance per class
SELECT 
  c.name AS class, 
  AVG(ar.completed_at - ar.started_at) AS avg_duration_assistance
FROM assistance_requests ar
JOIN students s ON ar.student_id = s.id
JOIN classes c ON s.class_id = c.id
GROUP BY c.name
ORDER BY avg_duration_assistance ASC;