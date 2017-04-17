<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Node Shopping Cart

## Project Summary
In this project we will cover how to use sessions, middleware, and url parameters by creating a shopping cart. We will do this by making an `express` server that stores a user's shopping cart on their session and have endpoints that can `update`, `delete`, and `read` items from their shopping cart. We'll test these endpoints using postman. 

## Setup

Before getting started with this repository run `npm install` when in the root of the project. Also make sure that you are using Node version 7.5.0 or greator ( `node --version` ).

## Step 1

### Summary

In this step we will install and require `express-session` to use with our express application.

### Instructions

In the root of the project run `npm install --save express-session`. After installing it, open `index.js` and on line 2 require the express-session package.

### Solution

<details>

<summary> <code> index.js </code> </summary>

```js
const express = require('express');
const session = require('express-session');

// Express Application
const app = express();

// Server
app.listen(3000, () => console.log('Server initiated on port 3000'));
```

</details>

## Step 2

### Summary

In this step we will use `express-session` by using middleware. You can think of middleware as functions that are called before reaching the endpoint of a request. Middleware functions take three parameters in the following order: the request object, the response object, and the next function. The next function must be called before the request can make it to an endpoint. When using express you can create middleware by using the use method: `app.use()` with the first parameter being a function.

When we required `express-session` it returned a function that we can invoke with an object. This object we create will configure our session. There are many options you can configure but we will stick with the basics: `secret`, `resave`, `saveUninitialized`, and `cookie`. You can find all the customizable options [here](https://github.com/expressjs/session).

### Instructions

