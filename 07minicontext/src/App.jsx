import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Login from "./component/Login.jsx";
import Profile from "./component/Profile.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
