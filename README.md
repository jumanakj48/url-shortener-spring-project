# URL Shortener Project

## Overview
This is a **full-stack URL shortener** web application developed using modern technologies.  
It offers URL shortening services along with real-time click analytics, date filters, and interactive graph visualizations.

- **Backend:** Spring Boot with REST APIs  
- **Frontend:** React with Tailwind CSS and Material-UI (MUI)  
- **Database:** PostgreSQL (hosted on Neon DB)  
- **Deployment:** Backend deployed using Docker on Render, Frontend hosted on Netlify  

---

## Backend Details

### Technologies & Dependencies

| Dependency                        | Purpose                                  |
|---------------------------------|------------------------------------------|
| `spring-boot-starter-data-jpa`  | ORM & Database Management (JPA/Hibernate) |
| `spring-boot-starter-security`  | Securing APIs with authentication          |
| `spring-boot-starter-web`       | Building RESTful Web APIs                   |
| `io.jsonwebtoken:jjwt`          | JWT token creation and validation           |
| `org.postgresql:postgresql`     | PostgreSQL JDBC Driver                      |
| `lombok`                       | Boilerplate code reduction (Getters, Setters, etc.) |
| `spring-boot-starter-test`      | Unit and integration testing                |
| `spring-security-test`           | Security-related testing utilities          |

### API Testing
- Used **Postman** to test and validate all backend REST APIs during development.

---

## Frontend Details

### Technologies & Dependencies

- **React 18** for UI development  
- **Vite** as the build tool and development server  
- **Tailwind CSS** for utility-first styling  
- **Material-UI (MUI)** for pre-built React components  
- **React Query** for efficient data fetching and caching  
- **Axios** for making HTTP requests  
- **React Router DOM** for client-side routing  
- Additional utilities: `react-hook-form`, `react-hot-toast`, `react-icons`, `react-loader-spinner`

### Scripts

| Script     | Description                     |
|------------|--------------------------------|
| `dev`      | Run development server (`vite`) |
| `build`    | Build the production bundle      |
| `lint`     | Run ESLint for code quality     |
| `preview`  | Preview production build        |

---

## Deployment

- **Backend:** Packaged and containerized using **Docker**, deployed on **Render** cloud platform  
- **Frontend:** Built with Vite and hosted on **Netlify**  
- **Database:** Hosted on **Neon DB** (PostgreSQL cloud service)  

---

## Features

- Create, manage, and list shortened URLs  
- Real-time analytics with dynamic date range filters  
- Interactive graph visualizations of click data  
- Secure JWT-based authentication and authorization  
- Responsive and user-friendly dashboard UI  
