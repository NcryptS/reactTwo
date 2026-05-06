# React Router Multi-Page Application

A responsive multi-page React application built using **React.js**, **React Router DOM**, and **Tailwind CSS**.

This project demonstrates modern frontend concepts including nested routing, reusable layouts, dynamic routes, API integration, and responsive UI design.

---

# Features

- Responsive UI using Tailwind CSS
- Multi-page routing with React Router DOM
- Shared layout using `Outlet`
- Dynamic routes using `useParams`
- Active navigation highlighting with `NavLink`
- GitHub API integration using route loaders
- Reusable components architecture
- Responsive Navbar and Footer
- Contact and About pages
- GitHub profile viewer page

---

# Tech Stack

## Frontend

- React.js
- React Router DOM
- Tailwind CSS

## Tools

- Vite
- Git & GitHub
- VS Code

---

# Project Structure

```txt
src/
│
├── Components/
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Github/
│   ├── Header/
│   ├── Home/
│   └── User/
│
├── Layout.jsx
├── main.jsx
└── index.css
```

---

# Routing Architecture

```txt
Layout
 ├── Header
 ├── Outlet
 │    ├── Home
 │    ├── About
 │    ├── Contact
 │    ├── Github
 │    └── User/:userid
 └── Footer
```

---

# Key Concepts Used

## Nested Routing

Implemented shared layouts using:

```jsx
<Outlet />
```

This keeps the Navbar and Footer persistent across pages.

---

## Dynamic Routes

Implemented user-based routing using:

```jsx
/users/:userid
```

and accessed parameters using:

```jsx
useParams();
```

---

## Route Loaders

Used React Router loaders for API data fetching:

```jsx
loader: githubInfoLoader;
```

Accessed data inside components using:

```jsx
useLoaderData();
```

---

# GitHub API Integration

The application fetches GitHub user data dynamically using:

```txt
https://api.github.com/users/NcryptS
```

and renders:

- Username
- Profile avatar

---

# Installation & Setup

## Clone the repository

```bash
git clone <your-repository-link>
```

---

## Navigate to project folder

```bash
cd project-name
```

---

## Install dependencies

```bash
npm install
```

---

## Start development server

```bash
npm run dev
```

---

# Future Improvements

- Add authentication
- Add dark mode
- Add form validation
- Add loading and error states
- Add protected routes
- Deploy with Vercel

---

# Learning Outcomes

Through this project, I learned:

- React component architecture
- React Router DOM
- Nested layouts and routing
- Dynamic routing
- API fetching and loaders
- Responsive UI development
- Reusable component design
- Tailwind CSS utility workflow

---

# Author

## Nitin Singh

- LinkedIn: https://www.linkedin.com/in/nitin-singh-61580221b/
- Portfolio: https://my-portfolio-nine-sand.vercel.app/
