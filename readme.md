# To-Do List Application

## Table of contents

- [To-Do List Application](#to-do-list-application)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The Features](#the-features)
  - [My process](#my-process)
  - [link](#link)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
    - [API Endpoints](#api-endpoints)

## Overview

- This is a simple To-Do List application built using the MongoDB, Express.js, and Node.js. It supports user registration,login,logout ,and Create, Read, Update, and Delete (CRUD) task operations.

### The Features

- register user
- login user
- logout user
- Add new tasks
- View all tasks
- Update existing tasks
- Delete tasks

## My process

## link

- Live Site URL: (https://todoapp-backend-mewv.onrender.com/api/task)

### Prerequisites

- Node.js
- MongoDB

### Installation

1.Clone the repository: //git clone https://github.com/G-Gakii/todoAppBackend.git

- cd todo-list-mean

2. Install server dependencies:

   - cd backend
   - npm install

3. Make sure MongoDB is running on your system.

### Running the Application

1. Start the backend server:
   - cd backend
   - npm start

### API Endpoints

- POST /api/user/register:register user
- POST /api/user/login:login user
- GET /api/user/logout:log out user
- GET /api/user/task: Retrieve all tasks
- POST /api/user/task: Create a new task
- PUT /api/user/task/:id: Update a task by ID
- DELETE /api/user/task/:id: Delete a task by ID
