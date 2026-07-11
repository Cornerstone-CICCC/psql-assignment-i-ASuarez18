-- Get total assignments per day
SELECT day, count(*) AS total_assignments
FROM assignments
GROUP BY day
ORDER BY day;