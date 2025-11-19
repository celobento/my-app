# MyApp

<div align="center">

![Angular](https://img.shields.io/badge/Angular-20.3.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

</div>

---

<div align="center">

<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo" width="150">

**A modern Angular application built with Angular CLI**

[Features](#features) • [Getting Started](#getting-started) • [Documentation](#documentation)

</div>

---

## Overview

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10. It's a modern Angular application built with the latest Angular framework features and best practices.

### Features

- ⚡ **Fast Development** - Hot module replacement and instant feedback
- 🎨 **Modern UI** - Built with Angular's component-based architecture
- 🧪 **Testing Ready** - Configured with Karma and Jasmine for unit testing
- 📦 **Production Ready** - Optimized builds for deployment
- 🔧 **TypeScript** - Full type safety and modern JavaScript features
- 🔐 **Authentication** - JWT-based authentication with json-server-auth
- 🗄️ **REST API** - Mock REST API backend powered by json-server
- 💾 **JSON Database** - File-based JSON database for easy development and testing

## Screenshots

<div align="center">

![Application Screenshot](https://via.placeholder.com/800x400/1976D2/FFFFFF?text=MyApp+Application+Screenshot)

*Add your application screenshots here*

</div>

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Angular CLI** (v20.3.10)

To install Angular CLI globally:

```bash
npm install -g @angular/cli
```

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
cd ..
```

### Development server

#### Frontend (Angular)

To start the Angular development server, run:

```bash
ng serve
# or
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

#### Backend (JSON Server)

To start the JSON Server backend API, run:

```bash
cd backend
npm start
```

The backend server will start on `http://localhost:3001` and provides:
- RESTful API endpoints for `users` and `assets`
- JWT-based authentication via json-server-auth
- CORS enabled for frontend integration

**API Endpoints:**
- `GET/POST /users` - User management
- `GET/POST /assets` - Asset management
- `POST /register` - User registration
- `POST /login` - User authentication
- `POST /logout` - User logout

**Default Users:**
- Email: `john.doe@example.com`, Password: `123456` (Role: USER)
- Email: `jane.doe@example.com`, Password: `123456` (Role: ADMIN)

## Tech Stack

<div align="center">

![Angular](https://img.shields.io/badge/Angular-20.3.0-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8.0-B7178C?logo=reactivex&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON%20Server-0.17.4-000000?logo=json&logoColor=white)
![Karma](https://img.shields.io/badge/Karma-6.4.0-E44235?logo=karma&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-5.9.0-8A4182?logo=jasmine&logoColor=white)

</div>

### Core Technologies

- **[Angular](https://angular.io/)** - The web framework for building modern applications
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[RxJS](https://rxjs.dev/)** - Reactive programming library
- **[Zone.js](https://github.com/angular/zone.js)** - Execution context for Angular
- **[JSON Server](https://github.com/typicode/json-server)** - Fake REST API for development and prototyping
- **[json-server-auth](https://github.com/jeremyben/json-server-auth)** - Authentication middleware for JSON Server

### Development Tools

- **[Angular CLI](https://angular.dev/tools/cli)** - Command-line interface for Angular
- **[Karma](https://karma-runner.github.io/)** - Test runner
- **[Jasmine](https://jasmine.github.io/)** - Testing framework

## Project Structure

```
my-app/
├── backend/             # Backend API server
│   ├── db.json         # JSON database file
│   ├── server.js       # JSON Server configuration
│   └── package.json    # Backend dependencies
├── src/
│   ├── app/            # Application source code
│   │   ├── components/ # Angular components
│   │   ├── guards/     # Route guards (auth)
│   │   ├── models/     # Data models
│   │   ├── services/   # Angular services
│   │   ├── app.ts      # Root component
│   │   └── app.routes.ts # Routing configuration
│   ├── index.html      # Entry HTML file
│   ├── main.ts        # Application bootstrap
│   └── styles.css     # Global styles
├── public/            # Static assets
├── angular.json       # Angular CLI configuration
└── package.json       # Frontend dependencies
```

## Development

### Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
# or shorthand
ng g c component-name
```

For a complete list of available schematics (such as `components`, `directives`, `pipes`, `services`), run:

```bash
ng generate --help
```

### Building

To build the project for production, run:

```bash
ng build
# or
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

To build for development:

```bash
ng build --configuration development
```

### Testing

#### Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use:

```bash
ng test
# or
npm test
```

This will launch the test runner in interactive watch mode. Tests will re-run automatically when files change.

#### End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs (e.g., Cypress, Playwright, or Protractor).

## API Documentation

The backend API is powered by JSON Server and provides RESTful endpoints:

### Authentication Endpoints

- `POST /register` - Register a new user
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "User Name"
  }
  ```

- `POST /login` - Authenticate user
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- `POST /logout` - Logout user (requires Authorization header)

### Resource Endpoints

- `GET /users` - Get all users (requires authentication)
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

- `GET /assets` - Get all assets
- `GET /assets/:id` - Get asset by ID
- `POST /assets` - Create new asset (requires authentication)
- `PUT /assets/:id` - Update asset (requires authentication)
- `DELETE /assets/:id` - Delete asset (requires authentication)

### Database

The database is stored in `backend/db.json` and can be edited directly. Changes are reflected immediately when the server is running.

## Documentation

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

### Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular Style Guide](https://angular.dev/style-guide)
- [Angular Blog](https://blog.angular.io/)
- [JSON Server Documentation](https://github.com/typicode/json-server)
- [json-server-auth Documentation](https://github.com/jeremyben/json-server-auth)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

---

<div align="center">

Made with ❤️ using [Angular](https://angular.io/)

</div>
