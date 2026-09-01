# Chatting Web — AI Development Instructions

## Project Overview

Chatting Web is a real-time web application that allows users
to communicate with each other through text messages.

## Tech Stack

- Frontend: React
- Backend: Node.js
- Server Framework: Express.js
- Real-time Communication: Socket.IO
- Database: MongoDB
- Version Control: Git + GitHub

## Project Structure

- `client/` — frontend application
- `server/` — backend application

Keep frontend and backend responsibilities separate.

## Development Conventions

- Use functional React components.
- Keep components small and reusable.
- Use meaningful names for variables, functions, and components.
- Follow the existing project structure.
- Avoid unnecessary dependencies.
- Keep API logic separate from UI components.
- Keep database logic separate from route definitions.
- Never hardcode secrets or credentials.
- Store sensitive configuration in environment variables.
- Never commit `.env` files.

## Real-Time Communication

- Use Socket.IO for real-time messaging.
- Keep socket event names clear and consistent.
- Handle connection and disconnection states properly.
- Avoid duplicating messages between socket events and API responses.

## UI Conventions

- Design for desktop and mobile screens.
- Keep the chat interface simple and easy to understand.
- Use consistent spacing, typography, and component styles.
- Provide clear loading and error states.
- Ensure buttons and interactive elements are accessible.
- Avoid unnecessary animations.

## Git Conventions

Use Conventional Commits.

Examples:

- `feat: add user authentication`
- `feat: add real-time messaging`
- `fix: prevent duplicate messages`
- `docs: update README`
- `refactor: simplify chat component`
- `test: add message tests`
- `chore: configure server`

## Code Quality

Before completing a task:

1. Review all changed files.
2. Avoid modifying unrelated files.
3. Check for obvious bugs.
4. Run available tests.
5. Run the application when appropriate.
6. Explain the changes made.

## AI Development Rules

Before implementing a significant feature:

1. Understand the existing project structure.
2. Inspect related files.
3. Reuse existing components and utilities where possible.
4. Avoid introducing unnecessary dependencies.
5. Do not invent requirements that were not provided.