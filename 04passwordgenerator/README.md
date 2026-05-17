# React Password Generator

An advanced, highly optimized password generation tool built using React. This project serves as an excellent demonstration of production-level React Hooks, caching mechanisms, and direct DOM interactions.

## Features

- **Dynamic Length Adjustment**: Real-time length scaling between 6 and 100 characters using a range slider.
- **Customizable Complexity**: Toggleable switches to instantly include or exclude numbers and special characters.
- **One-Click Clipboard Copy**: Built-in clipboard integration that selects and copies the generated password instantly.
- **Performance Optimized**: Uses memoization to avoid redundant re-renders during state updates.

## React Hooks Demonstrated

This project showcases a deep understanding of core and advanced React Hooks:

- **`useState`**: Manages application state for options (length, numbers, characters) and the output password.
- **`useCallback`**: Memoizes the generation and clipboard copy functions to optimize memory allocation and performance.
- **`useEffect`**: Automatically triggers password regeneration whenever any configuration state alters.
- **`useRef`**: Gains direct access to the HTML input field element to handle user text selection cleanly.

## Key Code Implementation

```jsx
// Memoized password generation function
const passwordGenerator = useCallback(() => {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let pass = "";

  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }
  setPassword(pass);
}, [length, numberAllowed, charAllowed, setPassword]);
```

## Getting Started

### Installation

1. Move into your project root directory.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Launch the application with:

```bash
npm run dev
```
