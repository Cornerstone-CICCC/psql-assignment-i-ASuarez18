-- Get total assistance requests assignment
SELECT 
  a.id, 
  a.day, 
  a.chapter, 
  a.name, 
  COUNT(ar.id) AS total_assistances
FROM assignments a
LEFT JOIN assistance_requests ar ON a.id = ar.assignment_id
GROUP BY a.id, a.name, a.day, a.chapter
ORDER BY total_assistances DESC;