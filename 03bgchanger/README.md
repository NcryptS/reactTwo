# React Background Color Changer

An interactive, responsive single-page application built with React. This project demonstrates state management using the `useState` hook by dynamically modifying the background color of the page based on user interactions.

## Features

- **Dynamic Backgrounds**: Click any button to instantly update the application's theme color.
- **Pre-configured Palette**: Includes classic quick-select colors like Red, Blue, and Pink.
- **Default Theme**: Safely initializes with a subtle `olive` background color.
- **State-Driven UI**: Utilizes React inline styles linked directly to active component state.

## Code Architecture

The application uses an inline style object tied directly to the `color` state variable:

```jsx
const [color, setColor] = useState("olive");

return (
  <div className="outerDiv" style={{ backgroundColor: color }}>
    {/* Buttons pass direct string values to the state setter */}
    <button onClick={() => setColor("red")}>Red</button>
  </div>
);
```

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) installed on your computer.

### Setup and Installation

1. Navigate to your project directory.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Execution

Launch the local development server with:

```bash
npm run dev
```

Open your browser and open the address displayed in your terminal (typically `http://localhost:5173`).

## Project Layout

- `App.jsx` - Contains the state management logic and UI buttons.
- `App.css` - Manages structural flexbox layout (`outerDiv` and `innerDiv`).
