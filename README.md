# Structured Query Language (SQL) Assignment

## Introduction

In this assignment, you will be creating a database for a new application to help manage data about students and instructors.

The app will allow instructors to help students better and faster by offering a quick
insight into data like assignment completion and effectiveness of assistance requests.

You will be responsible for writing all of the queries to get data from the database. That means writing a lot of `SELECT` statements, without having to worry about any JavaScript, HTML, or CSS.

## The Entities

The application will have the following entities:

- `student`
- `instructor`
- `assignment`
- `AssistanceRequest`
- `assignment_submission`
- `class`

A `class` will have the following attributes:

- `id` - a unique identifier for the class
- `name` - the name of the class
- `start_date` - the date the class starts
- `end_date` - the date the class ends

A `student` will have the following attributes:

- `id` - a unique identifier for the student
- `name` - the name of the student
- `email` - the email of the student
- `phone` - the phone number of the student
- `github` - the github username of the student
- `start_date` - the date the student started the class
- `end_date` - the date the student ended the class
- `class_id` - the id of the class the student is in

An `assignment` will have the following attributes:

- `id`: A unique identifier
- `name`: The name of the assignment
- `content`: The written content body of the assignment
- `day`: The day that the assignment appears on
- `chapter`: The order that the assignment will appear in the day.
- `duration`: The average time it takes a student to finish

An `assignment_submission` will have the following attributes:

- `id`: A unique identifier
- `assignment_id`: The id of the assignment
- `student_id`: The id of the student
- `duration`: The time it took the student to complete the assignment
- `submission_date`: The date is was submitted

A `instructor` will have the following attributes:

- `id`: A unique identifier
- `name`: The name of the instructor
- `start_date`: The date that the instructor started working.
- `end_date`: The date that the instructor stopped working.
- `is_active`: If the instructor is actively teaching right now.

An `assistance_request` will have the following attributes:

- `id`: A unique identifier
- `assignment_id`: The id of the assignment the request was made from
- `student_id`: The id of the student making the request
- `instructor_id`: The id of the instructor responding to the request
- `created_at`: The timestamp when the request was made
- `started_at`: The timestamp when the assistance started
- `completed_at`: The timestamp when the assistance was completed
- `student_feedback`: Feedback about the student given by the instructor
- `instructor_feedback`: Feedback about the instructor given by the student
