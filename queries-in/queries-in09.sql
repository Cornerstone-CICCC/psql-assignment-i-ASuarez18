-- Get avg total assistance requests class
SELECT AVG(total_duration) AS avg_total_duration
FROM (
  SELECT 
    c.name AS class, 
    SUM(ar.completed_at - ar.started_at) AS total_duration
  FROM assistance_requests ar
  JOIN students s ON ar.student_id = s.id
  JOIN classes c ON s.class_id = c.id
  GROUP BY c.name
) AS class_totals;