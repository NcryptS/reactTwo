# React Mini Context API Application

A lightweight single-page application demonstrating global state management using React Context API. This project showcases how to share user authentication data across isolated components without relying on prop drilling.

## Features

- **Global State Management**: Uses native React Context to share data globally.
- **Dynamic Conditional Rendering**: Automatically toggles between a fallback login message and profile details based on state.
- **Prop-Drilling Alternative**: Demonstrates clean state inheritance across deeply nested components.

## Core Architecture

The project decouples state distribution from data consumption through three primary layers:

### 1. Context Creation & Provision (`UserContextProvider.jsx`)

Initializes the context engine and wraps the application tree to broadcast state updates.

```jsx
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

### 2. State Mutation (`Login.jsx`)

Consumes the global `setUser` updater function to dispatch credentials securely upon form submission.

```jsx
const { setUser } = useContext(UserContext);
const handleSubmit = (e) => {
  e.preventDefault();
  setUser({ username, password });
};
```

### 3. State Consumption (`Profile.jsx`)

Reads the global `user` state directly to conditionally show authenticated dashboard information.

```jsx
const { user } = useContext(UserContext);
if (!user) return <div>please login</div>;
```

## Getting Started

### Installation

1. Open your terminal in the project root directory.
2. Install the application dependencies:
   ```bash
   npm install
   ```

### Running Locally

Launch the application development server with:

```bash
npm run dev
```

## Folder Structure

```text
src/
├── context/
│   ├── UserContext.js          # Context initialization
│   └── UserContextProvider.jsx # Global state provider wrapper
├── component/
│   ├── Login.jsx               # Login form component (State Updater)
│   └── Profile.jsx             # Profile view component (State Consumer)
├── App.jsx                     # Layout orchestration
└── main.jsx                    # Application entry point
```
