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
```

### What I Learned:
Capturing user input from a form.
Converting JavaScript objects to JSON format before storing.


## 2️⃣ Read (Fetching Tasks)
Tasks are retrieved from localStorage and displayed when the page loads.

```javascript
function getTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
}
```

### What I Learned:
Parsing JSON data stored in localStorage.
Using || [] as a fallback for empty storage.


## 3️⃣ Update (Editing Tasks)
Tasks can be edited and updated in localStorage.

```javascript
function updateTask(taskId, newText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => task.id === taskId ? { ...task, text: newText } : task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
```

### What I Learned:
Using .map() to iterate and update an item in an array.
Spreading (...task) properties to modify only specific fields.


##    4️⃣ Delete (Removing Tasks)
Tasks can be deleted permanently from localStorage.

```javascript
function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
```

###   What I Learned:
Using ```.filter()``` to remove specific items.
Ensuring state persistence after deleting a task.

## 🗄 Local Storage Methods
Local Storage is a built-in web API that provides a key-value store inside the browser.

##    ✅ localStorage.setItem(key, value)
Stores data in Local Storage.

javascript
Copy
Edit
localStorage.setItem("username", "Edward");
✅ localStorage.getItem(key)
Retrieves stored data.

javascript
Copy
Edit
let name = localStorage.getItem("username");  // "Edward"
✅ localStorage.removeItem(key)
Deletes a specific key from storage.

javascript
Copy
Edit
localStorage.removeItem("username");
✅ localStorage.clear()
Clears all stored data.

javascript
Copy
Edit
localStorage.clear();
What I Learned:
How to manipulate localStorage with different methods.
The importance of JSON.stringify() and JSON.parse() for storing complex data.
🎨 Additional Features Implemented
Event Listeners: Used to capture user clicks, form submissions, and keyboard events.
UI Toggling: Dynamically showing/hiding elements based on stored data.
Error Handling: Preventing invalid inputs from being stored.
🎯 Conclusion
This project deepened my understanding of front-end storage mechanisms and how to make web applications persistent.
Key takeaways:

Local Storage is simple but powerful for saving user data.
CRUD operations are fundamental to dynamic applications.
JSON formatting is essential for storing structured data in localStorage.
💡 Next Steps: Implementing IndexedDB for handling large-scale data storage.
