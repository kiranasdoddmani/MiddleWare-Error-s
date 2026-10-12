# Express.js Middleware and Error Handling

## 📌 Overview

This project demonstrates middleware and error handling in Express.js using Node.js, Express.js, EJS, and MongoDB.

It focuses on handling asynchronous errors, creating custom error classes, validating user input, and managing invalid routes in an Express application.

## 🚀 Concepts Covered

### 1. Middleware

Middleware functions execute during the request-response cycle. They can access the request and response objects, modify them, and pass control to the next middleware.

Types of middleware:

* Built-in middleware
* Third-party middleware
* Application-level middleware
* Error-handling middleware

### 2. Async Error Handling — WrapAsync

WrapAsync is a reusable function that handles rejected promises from asynchronous route handlers and forwards errors to Express error-handling middleware.

It reduces repetitive try-catch blocks in asynchronous routes and makes route handlers cleaner.

### 3. Custom Error Class — ExpressError

A custom error class allows developers to define their own error messages and HTTP status codes.

It helps manage application errors consistently and makes error handling easier to understand.

### 4. Handling Invalid Routes — 404 Not Found

A catch-all route handles requests to URLs that do not match any defined application route.

The HTTP 404 status code indicates that the requested page or resource could not be found.

### 5. Error-Handling Middleware

Error-handling middleware centralizes error processing in an Express application.

It receives the error object, request object, response object, and next function. It can send an appropriate HTTP status code and error message to the client.

### 6. Mongoose Validation

Mongoose validation ensures that data follows the rules defined in the schema before being stored in MongoDB.

Examples of validation include:

* Required fields
* Minimum and maximum values
* Data type validation
* Custom validation messages

### 7. HTTP Status Codes

* **400 — Bad Request:** The request contains invalid data.
* **404 — Not Found:** The requested resource does not exist.
* **500 — Internal Server Error:** An unexpected server-side error occurred.

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* EJS-Mate
* Method-Override

## 📚 Key Learnings

* Understanding the Express middleware request-response cycle.
* Handling asynchronous errors using WrapAsync.
* Creating and using custom error classes.
* Managing invalid URLs with 404 errors.
* Implementing centralized error-handling middleware.
* Validating user input before saving data.
* Understanding HTTP status codes and error responses.

## 🎯 Objective

To understand middleware and centralized error handling in Express.js and apply these concepts to real-world web applications.
