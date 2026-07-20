-- Get avg assistance request duration
SELECT 
  AVG(ar.completed_at - ar.started_at) AS avg_assistance_request_duration
FROM assistance_requests ar;