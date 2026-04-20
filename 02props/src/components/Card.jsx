import React from "react";
import "./Card.css";

function Card(props) {
  /* One */
  // function Card({username}) destructuring of props object

  //   Four
  // function Card({username, price=1200}) if value is not passed in componentCall

  console.log(props.username);

  return (
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
  );
}

export default Card;
