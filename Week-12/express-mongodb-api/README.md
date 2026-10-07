# Week 12: Express + MongoDB REST API

A complete REST API with JWT authentication, built with Express.js and MongoDB.

## Features

- User registration and login with JWT authentication
- Password hashing with bcrypt
- Protected routes with middleware
- Full CRUD operations for tasks
- Input validation
- Global error handling
- MongoDB with Mongoose ODM

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Week-12/express-mongodb-api
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-api
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=7d
```

4. Start MongoDB (if not already running)
```bash
# On Mac/Linux
sudo systemctl start mongod

# On Windows (if installed as service)
net start MongoDB
```

5. Run the server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User (Protected)
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Tasks (All Protected)

#### Get All Tasks
```http
GET /api/tasks
Authorization: Bearer <token>
```

#### Get Single Task
```http
GET /api/tasks/:id
Authorization: Bearer <token>
```

#### Create Task
```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the REST API",
  "status": "in-progress",
  "priority": "high",
  "dueDate": "2026-08-15"
}
```

#### Update Task
```http
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "completed"
}
```

#### Delete Task
```http
DELETE /api/tasks/:id
Authorization: Bearer <token>
```

## Testing with cURL

### Register a user
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Create a task (replace TOKEN with actual token)
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"title":"My first task","description":"Test task","priority":"high"}'
```

### Get all tasks
```bash
curl -X GET http://localhost:5000/api/tasks \
  -H "Authorization: Bearer TOKEN"
```

## Project Structure

```
Week-12/express-mongodb-api/
├── config/
│   └── db.js              # MongoDB connection
├── middleware/
│   ├── auth.js            # JWT authentication middleware
│   └── errorHandler.js    # Global error handler
├── models/
│   ├── User.js            # User schema with password hashing
│   └── Task.js            # Task schema
├── routes/
│   ├── auth.js            # Auth routes
│   └── tasks.js           # Task routes
├── controllers/
│   ├── authController.js  # Auth logic
│   └── taskController.js  # Task CRUD logic
├── .env                   # Environment variables
├── .gitignore
├── server.js              # Main server file
└── README.md
```

## Authentication Flow

1. User registers: password is hashed with bcrypt, then JWT token is returned
2. User logs in: password is verified, then JWT token is returned
3. Protected routes require `Authorization: Bearer <token>` header
4. Middleware verifies token and attaches user to request

## Key Concepts

### Middleware
- **Auth middleware:** Verifies JWT token and attaches user to request
- **Error handler:** Catches all errors and returns consistent JSON responses

### Mongoose Features
- **Schema validation:** Built-in validation for required fields, email format, etc.
- **Pre-save hooks:** Automatically hash passwords before saving
- **Instance methods:** `comparePassword()` method on User model

### JWT Flow
- Token contains user ID and expires in 7 days
- Sent in `Authorization` header as `Bearer <token>`
- Verified on every protected route

## What I Learned

- Building REST APIs with Express.js
- MongoDB schema design with Mongoose
- JWT authentication implementation
- Password hashing with bcrypt
- Middleware patterns in Express
- Error handling in Node.js
- Protecting routes and resources

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT.io](https://jwt.io/)
- [MongoDB University](https://university.mongodb.com/)
