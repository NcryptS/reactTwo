```txt
prop passing is done one by one component by component which passes through the component that do not need the prop
prop-drilling -> passing data directly to the component as global variable or function(done by contextApi hook, redux, rdx tookit)
create UserContext in src/context
creat UserContextProvider in src/context
create components Login.jsx and Profile.jsx
wrap children with UserContextProvider and set values in it
useContext hook -> access the variables or function defined in contextProvider, in a component
check if user exist or not using context
load context provider and components in App.jsx (wrap with contextProvider)
```

# Login.jsx Component:

```Javascript
<div>
      <h2>Login</h2>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
</div>
```
