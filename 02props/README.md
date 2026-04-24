# Card Component File:

```javascript
<div className="card">
  <div>
    <img
      src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif"
      alt="test"
      width="300"
      height="300"
      className="card-img"
    />
  </div>
  <div className="card-info">
    <div className="card-title-row">
      <h1 className="card-name">{props.username}</h1>
      <h1 className="card-price-label">Price</h1>
    </div>
    <div className="card-meta-row">
      <p className="card-id">#345</p>
      <p className="card-price">{props.price}</p>
    </div>
  </div>
</div>
```

# Card.css

```CSS
/* NFT Card Wrapper */
.card {
  width: 288px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  min-height: 288px;
  margin-top: 12px;

  /* Glass effect */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* Card Image */
.card-img {
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0 0;
  display: block;
}

/* Card Bottom Info */
.card-info {
  display: flex;
  flex-direction: column;
  padding: 12px 12px 28px 12px;
  margin-top: -16px;
  background-color: #000000;
  border-radius: 0 0 12px 12px;
}

/* Title Row */
.card-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-name {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #ffffff;
  margin: 0;
}

.card-price-label {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #ffffff;
  margin: 0;
}

/* ID & Price Row */
.card-meta-row {
  display: flex;
  justify-content: space-between;
  font-family: "Courier New", Courier, monospace;
  margin-top: 4px;
}

.card-id,
.card-price {
  color: #ffffff;
  margin: 0;
  font-size: 0.875rem;
}
```
