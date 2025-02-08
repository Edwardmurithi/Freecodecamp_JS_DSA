# Working with Dates in JavaScript

## Overview
Working with dates in JavaScript can be challenging due to various formats, methods, and time zones. This project focuses on mastering the JavaScript `Date` object, its methods, and how to format dates correctly.

## What I Learned
In this project, I explored the following concepts:

- Understanding the JavaScript `Date` object and its importance.
- Using key methods to retrieve date components:
  - `getDate()` – Gets the day of the month (1–31).
  - `getMonth()` – Gets the month (0–11, where January is 0).
  - `getFullYear()` – Gets the full year (e.g., 2024).
- Formatting dates correctly for different use cases.

## Key Takeaways
- JavaScript's `Date` object allows precise date manipulation.
- Handling months requires caution as they are zero-based.
- Proper date formatting is crucial for user-friendly outputs.

## Usage
To create and manipulate a date in JavaScript, you can use the following example:

```javascript
const today = new Date();
console.log(`Today’s Date: ${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`);
