CREATE TABLE instructors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    is_active BOOLEAN,
    start_date TIMESTAMP,
    end_date TIMESTAMP
);


CREATE TABLE assistance_requests (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    instructor_id INT REFERENCES instructors(id),
    assignment_id INT REFERENCES assignments(id),
    created_at TIMESTAMP,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    student_feedback VARCHAR(100),
    instructor_feedback VARCHAR(100)
);

