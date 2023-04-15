# bookshop-js

A simple book store API in need of input validation/sanitization.

This is a part of the University of Wyoming's Secure Software Design Course (Spring 2023).

## Versioning

`bookshop-js` is built with:

- node version v16.19.0
- npm version 9.6.2
- nvm version 0.39.3

## Usage

Start the api using `npm run dev`

I recommend using [`httpie`](https://httpie.io) for testing of HTTP endpoints on the terminal. Tutorials are available elsewhere online, and you're free to use whatever tools you deem appropriate for testing your code.

## Analysis of Existing Code

The first major problem is the lack of input validation, this leads to several problems:

- A user can input any type value into any field (except `null` in instances where it is not allowed which crashes the server)
- If the body of a request is malformed the server crashes
- When a request is made to the database, but the requested data doesn't exist in the database, the server crashes

In the function `createPurchaseOrder` in the file purchaseOrders.ts the db.run statement is mussing a `?` resulting in the server crashing when it is called.
The function `chargeCustomerForPO` is not implemented and the user is not notified, including a message in the response for the user would be useful.

The database is not susceptible to injection attacks since parameterized queries are used.
