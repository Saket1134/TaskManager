# Task Manager Application
Full Stack — Next.js + NestJS + MongoDB


# 1. System Overview

This is a full-stack Task Management application built using:
- **Frontend:** Next.js (App Router)
- **Backend:** NestJS
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Token)

The system follows a 3-layer architecture:
Frontend (Client) → Backend API (NestJS) → MongoDB Database
Flow:
1. User registers or logs in from the frontend.
2. Backend validates credentials and generates a JWT.
3. Frontend stores the JWT in localStorage.
4. For protected routes, frontend sends JWT in the Authorization header.
5. NestJS AuthGuard verifies JWT before allowing access.
6. Backend performs CRUD operations on MongoDB.
This ensures separation of concerns and scalability.

# 2)Folder Structure
Backend 

backend/src 
 ├── auth/ 
 |    ├── auth.module.ts 
 |    ├── auth.dto.ts 
 │    ├── auth.controller.ts 
 │    ├── auth.service.ts 
 │    ├── jwt.strategy.ts  
 │ 
 ├── users/ 
 |    ├── user.module.ts 
 │    ├── user.schema.ts 
 │ 
 ├── tasks/ 
 |    ├── create-task.dto.ts 
 │    ├── tasks.controller.ts 
 │    ├── tasks.service.ts 
 │    ├── task.schema.ts 
 │ 
 ├── app.module.ts 
 ├── main.ts 

 Frontend
 
frontend/app
 ├── login/page.js
 ├── register/page.js
 ├── dashboard/page.js

 # 3)Database Schema
 User Schema (Mongoose)
 
 @Schema()  
export class User {  
  @Prop({ required: true, unique: true })   
  email: string;  
 
  @Prop({ required: true })  
  password: string;  
}  

email → unique identifier for login. 

password → stored as hashed value using bcrypt.

title → Main task name.

description → Optional task details.

status → pending / completed.

dueDate → Deadline.

priority → low / medium / high.

user → Links task to specific user (ownership model).

timestamps → Automatically adds createdAt & updatedAt.
# 4)API Endpoints
POST auth register
POST auth login
GET tasks
POST tasks
PATCH tasks id
DELETE tasks id

# 5)Authentication Flow (JWT)
1)User registers → password hashed using bcrypt.
2)User logs in → password compared with hashed value.
3)Backend creates JWT:
4)Frontend stores token in localStorage.
5)Frontend send
6)JwtStrategy verifies.

# 6)Al tools Used
Tools used:

ChatGPT — debugging JWT errors, architecture writing,Backend code.
GitHub Copilot — boilerplate generation

Review Process:

Verified JWT secret consistency.
Fixed payload mismatch issues.
Debugged 401 and 500 errors manually.
Reviewed and understood all generated code.

Error in Backend codes.

# 7. Decisions & Trade-offs

## Key Technical Decisions

### 1. JWT-Based Authentication
I chose JWT for authentication because it enables stateless authentication. The server does not need to store session data, which makes the system scalable and easier to deploy across multiple instances.

### 2. Modular Architecture in NestJS
The backend is structured into feature modules (`auth`, `users`, `tasks`). This keeps responsibilities separated and improves maintainability and scalability.

### 3. Mongoose with MongoDB
I used MongoDB with Mongoose because:
- It allows flexible schema design.
- It integrates well with NestJS.
- It supports document-based storage which fits task-based data.

### 4. Task Ownership via ObjectId Reference
Each task stores a reference to the user using:
This ensures that tasks are linked to a specific user and prevents unauthorized access to other users' tasks.

### 5. LocalStorage for Token Storage
I used `localStorage` in the frontend to store JWT tokens for simplicity and ease of implementation.

---

## Improvements With More Time

- Add WebSocket real-time updates
- Add pagination and advanced filtering
- Improve UI with better design and responsiveness
- Add unit and integration tests
- Implement refresh tokens for better authentication flow

---




