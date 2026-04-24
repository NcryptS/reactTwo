```txt
useState hooks based on ui
uses of useCallback hook and dependency array
password generation
input of text
onChange on range, checkbox input
useEffect -> re-runs the function
useCallback -> keep the function and variables in cache(for optimisation)
useRef hook -> gets the refernce of a tag and helps with the manipuation using that reference
copy to clipboard with specific range of password selection
```

# App.jsx

```JAVASCRIPT
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 999);
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="container">
      <h1>Password Generator</h1>

      <div className="input-box">
        <input
          type="text"
          readOnly
          placeholder="Password"
        />
        <button
        >Copy</button>
      </div>

      <div className="controls">
        <div className="control-group">
          <input
            type="range"
            min={6}
            max={100}
          />
          <label>Length: {length}</label>
        </div>

        <div className="control-group">
          <input
            type="checkbox"
          />
          <label>Numbers</label>
        </div>

        <div className="control-group">
          <input
            type="checkbox"
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
```

# App.css

```CSS
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #1f2937;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  width: 350px;
  background-color: #111827;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  color: orange;
}

h1 {
  text-align: center;
  color: white;
}

.input-box {
  display: flex;
  margin-bottom: 15px;
}

.input-box input {
  flex: 1;
  padding: 8px;
  border: none;
  outline: none;
}

.input-box button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
}

.controls {
  font-size: 14px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
```
