# MERN TODO List App

This is a TODO List application built using the MERN stack. It allows users to manage their tasks effectively.

## Prerequisites

Before running the application, ensure you have the following installed:
- Node.js and npm (Node Package Manager)
- MongoDB (optional if using deployed backend)
- MongoDB Compass (for database management)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Deena-02/ToDoList.git
```

### 2. Install dependencies

```bash
cd mern-todo-app/TODO

# Split the terminal :

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```

### 3. MongoDB Setup

- Open MongoDB Compass
- Create a new database named `Todo`
- Inside the `Todo` database, create a collection named `tasks`

### 4. Server setup for database connection

```bash
PORT=5000  # Port number for the server (you can change it if needed)
MONGO_URI=mongodb://127.0.0.1:27017/Todo  # MongoDB connection URI
```

### 5. Running the App

```bash
# Start the server (from the 'backend' directory)
npm start

# Start the client (from the 'frontend' directory)
npm start
```

The server will run on `http://localhost:5000` and the client on `http://localhost:3000`.

Note: You can also use the deployed versions of the app:

-Backend: https://to-do-list-five-kohl-13.vercel.app
-Frontend: https://todolist-imkh.onrender.com

## Usage

- Open your web browser and go to `http://localhost:3000`.
- You can add ,update tasks, mark them as completed or delete them.

## Output
![MERN TODO List App](./output.jpeg)

## Contributing

Feel free to contribute to this project by submitting pull requests.

## License

This project is licensed under the MIT License

