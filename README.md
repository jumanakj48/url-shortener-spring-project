# url-shortener-spring-project

Overview
This is a full-stack URL shortener web application developed using React for the frontend and Spring Boot for the backend. The application allows users to create shortened URLs and track real-time analytics such as click counts, with interactive date filters and graphical visualizations. The system is designed with security, performance, and responsiveness in mind.

Backend
Developed using Spring Boot framework.

Implements REST APIs to handle URL shortening, retrieval, and analytics.

Includes security features with Spring Security and JWT-based authentication.

Data persistence is managed using Spring Data JPA with PostgreSQL as the database.

API testing and debugging done using Postman.

Key dependencies:

spring-boot-starter-data-jpa — For ORM and database interactions.

spring-boot-starter-security — For authentication and authorization.

spring-boot-starter-web — To build RESTful web services.

jjwt — To handle JSON Web Tokens (JWT) for secure communication.

postgresql driver — To connect with PostgreSQL database.

lombok — To reduce boilerplate code with annotations.

Testing dependencies for unit and security tests.

Frontend
Built with React 18 using Vite as the build tool.

UI designed with Material-UI (MUI) components and Tailwind CSS for styling.

State and asynchronous data management handled with React Query.

Uses popular libraries such as:

axios for API calls,

react-chartjs-2 for interactive chart visualizations,

react-hook-form for form management,

react-hot-toast for notifications,

react-router-dom for routing,

framer-motion for smooth animations.

Code quality maintained with ESLint and React hooks linting.

Deployment
Backend is containerized using Docker and deployed on Render web server.

Frontend is deployed using Netlify, providing fast and reliable CDN-based hosting.

The database is hosted on Neon, a scalable Postgres-as-a-Service platform.

Continuous integration and delivery allow smooth updates and maintenance.

