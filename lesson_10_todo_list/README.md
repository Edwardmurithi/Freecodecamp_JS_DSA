# 📌 TODO Application with Local Storage

## 📝 Introduction
This project is a simple **TODO Application** that demonstrates how to use **Local Storage** to persist data in a web browser. It allows users to **add, edit, delete, and store tasks**, ensuring they remain available even after refreshing the page.

Through this project, I learned how to:
- Work with **Local Storage** to store data persistently.
- Handle **form inputs** dynamically.
- Implement **CRUD (Create, Read, Update, Delete) operations** on tasks.
- Use **event listeners** to manage user interactions.
- Toggle **UI elements** based on user actions.

---

## 📂 CRUD Operations

The **CRUD** operations form the core functionality of this application.

### 1️⃣ Create (Adding Tasks)
When a user enters a task and submits the form, the task is **saved to localStorage**.

```javascript
function addTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ id: Date.now(), text: taskText });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
