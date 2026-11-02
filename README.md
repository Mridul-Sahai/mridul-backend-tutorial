# Backend Tutorial Project

A backend application built using Node.js, Express.js, and MongoDB. This project provides CRUD (Create, Read, Update, Delete) APIs for managing Users and Posts.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- bcryptjs
- dotenv
- Nodemon
- Postman

## Project Structure

```text
backend-tutorial/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── postController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── Post.js
│   │   └── user.js
│   ├── routes/
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Mridul-Sahai/mridul-backend-tutorial.git
```

2. Open the project folder:

```bash
cd mridul-backend-tutorial
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root:

```env
PORT=4000
MONGODBURI=your_mongodb_connection_string
```

Replace the placeholder with your own MongoDB Atlas connection string.

5. Start the development server:

```bash
npm run dev
```

The server runs at `http://localhost:4000`.

## API Endpoints

### User APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users` | Create a user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a user by ID |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

### Post APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/posts` | Create a post |
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get a post by ID |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

## API Testing

All API endpoints were tested using Postman.

## Author

Created as a college backend development project.