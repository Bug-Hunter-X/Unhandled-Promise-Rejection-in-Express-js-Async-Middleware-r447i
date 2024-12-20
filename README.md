# Unhandled Promise Rejection in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications involving unhandled promise rejections within asynchronous middleware.  The provided code simulates an asynchronous data processing function that may throw an error.  The problem is that the error is not properly caught and handled, resulting in a generic 500 error response to the client.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js` to start the server.
4. Send a POST request to `/data` with a JSON payload containing `{"someProperty": "fail"}`.  Observe the 500 error response.
5. Run `node bugSolution.js` to start the server with the corrected code.  Send the same request and observe the detailed error response.