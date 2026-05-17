# React Counter Application

A simple, interactive counter application built with React and Vite. This project demonstrates basic state management using the `useState` hook, along with conditional logic to restrict the counter boundaries.

## Features

- **Increment Counter**: Increases the value by 1 (Maximum limit: 20).
- **Decrement Counter**: Decreases the value by 1 (Minimum limit: 0).
- **State Protection**: Prevents the counter from going below 0 or above 20.
- **Dynamic UI**: Automatically updates all visible counter text on the screen.

## Demo Code Preview

The core logic uses React's `useState` hook to manage the counter boundaries safely:

```javascript
const addValue = () => {
  if (counter < 20) setCounter(counter + 1);
};

const removeValue = () => {
  if (counter > 0) setCounter(counter - 1);
};
```

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed on your machine.

### Installation

1. Clone the repository or navigate to your project directory.
2. Install the project dependencies:
   ```bash
   npm install
   ```

### Running the Application

To launch the local development server, run:

```bash
npm run dev
```

Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

## Technologies Used

- **React** (Functional Components & Hooks)
- **Vite** (Frontend Build Tool)
- **CSS3** (Styling)
