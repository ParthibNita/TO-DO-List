# Todo App README

## Overview

This is a Todo App built using React, which allows users to create, update, and delete todo items. The app also persists data to local storage, ensuring that todo items are retained even after the user closes the browser.

## Features

- Create new todo items
- Update existing todo items
- Delete todo items
- Toggle todo item completion status
- Persist data to local storage

## Components

- `App.js`: The main application component, which renders the todo list and provides functionality for creating, updating, and deleting todo items.
- `TodoForm.js`: A component that renders a form for creating new todo items.
- `TodoItem.js`: A component that renders a single todo item, including its title, description, and completion status.

## Context API

The app uses the Context API to manage state and provide functionality across components.

## Local Storage

The app uses local storage to persist todo items. When the app is loaded, it checks local storage for existing todo items and initializes the state accordingly. When the state changes, the app updates local storage to reflect the changes.

## Getting Started

To run the app, clone the repository and navigate to the project directory. Then, run the following commands:

```bash
npm install
npm run dev
```
