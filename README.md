# React Todo App

This is a simple todo app built with React. It allows users to add, delete, and mark todos as complete.

## Installation

To install the dependencies, run:

```
npm install
```

## Usage

To run the app, run:

```
npm start
```

## Docker

To run the app using Docker, first build the Docker image:

```
docker build -t react-todo-app .
```

Then, run the Docker container:

```
docker run -p 3000:3000 react-todo-app
```

## File Structure

- `public/`: Contains the index.html file and other static assets.
- `src/`: Contains the source code for the React app.
  - `App.js`: The main component that renders the todo form and todo list.
  - `TodoForm.js`: The component that renders the form for adding todos.
  - `TodoList.js`: The component that renders the list of todos.
  - `TodoItem.js`: The component that renders an individual todo item.
  - `index.js`: The entry point for the React app.
- `Dockerfile`: The Dockerfile used to build the Docker image.