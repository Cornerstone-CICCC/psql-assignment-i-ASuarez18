-- Get students enrolled:
SELECT name, id, class_id 
FROM students
WHERE end_date IS NULL
ORDER BY class_id;