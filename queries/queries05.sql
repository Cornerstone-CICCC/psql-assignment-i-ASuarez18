-- Students without Gmail and phone:
SELECT name, id, email, class_id
FROM students
WHERE email NOT LIKE '%gmail.com' 
  AND phone IS NULL;