```txt
remember:
onClick={() => setColor("blue")} onClick ek function expect karta hai by syntax hi vaise hai uska
style={{ backgroundColor: color }} aise karke hum css me variables de sakte hai aur inline css de sakte hai for some tag

create state to set color on background
give backgroud color to button using style
put onClick on each button that changes background color upon clicking them

```

```Javascript

<div className="outerDiv" style={{ backgroundColor: color }}>
      <div className="innerDiv">
        <button>
          red
        </button>
        <button>
          blue
        </button>
        <button>
          pink
        </button>
      </div>
    </div>

```

```CSS
.outerDiv {
  height: 100vh;
  width: 100vw;
}

.innerDiv {
  height: 90vh;
  width: 90vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}

.innerDiv button {
  border-radius: 30px;
  border: none;
  padding: 12px;
}

```
