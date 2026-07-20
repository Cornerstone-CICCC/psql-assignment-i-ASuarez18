-- Get data assistance request
SELECT 
  i.name AS instructor, 
  s.name AS student, 
  a.name AS assignment,
  (ar.completed_at - ar.started_at) AS assistance_duration
FROM assistance_requests ar
JOIN instructors i ON ar.instructor_id = i.id
JOIN students s ON ar.student_id = s.id
LEFT JOIN assignments a ON ar.assignment_id = a.id
ORDER BY assistance_duration;