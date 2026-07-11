DROP TABLE IF EXISTS assignment_submissions;
DROP TABLE IF EXISTS assignments;

CREATE TABLE assignments(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  content TEXT,
  day INTEGER,
  chapter INTEGER,
  duration INTEGER
);

CREATE TABLE assignment_submissions(
  id SERIAL PRIMARY KEY,
  assignment_id INTEGER REFERENCES assignments(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  duration INTEGER,
  submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);