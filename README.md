#Abin Roy S

mern1

# Blog Application Backend

This repository contains the backend code for the Blog Application, built using Node.js, Express.js, and MongoDB.

## Features

- RESTful API for blog posts management
- Supports CRUD operations (Create, Read, Update, Delete)
- Middleware for handling CORS and JSON body parsing
- Environment variable configuration using `dotenv`

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Environment Variables

Create a `.env` file in the root of the backend directory and add the following variables:

```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
```

Replace `<your-mongodb-connection-string>` with the URI of your MongoDB instance.

---

## Running the Application

To start the server in production mode:

```bash
npm start
```

To start the server in development mode with hot-reloading:

```bash
npm run dev
```

The server will run on the port specified in the `.env` file (default: 5000).

---

## API Endpoints

### Base URL

`http://localhost:5000`

### Endpoints

- **GET /posts**: Fetch all blog posts
- **GET /posts/:id**: Fetch a single blog post by ID
- **POST /posts**: Create a new blog post
- **PUT /posts/:id**: Update a blog post by ID
- **DELETE /posts/:id**: Delete a blog post by ID

---

## Testing

You can test the API using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).
---

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

---
