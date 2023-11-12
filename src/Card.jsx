import React from "react";

function Card(props) {
  return (
    <div>
      <h1>My Contacts</h1>

      <h2>{props.name}</h2>
      <img src={props.imag} />
      <p>{props.mobile} </p>
      <p>{props.email}</p>
    </div>
  );
}
export default Card;
