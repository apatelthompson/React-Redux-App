import React from "react";

const Brewery = props => {
  console.log("props from Brewery", props);
  return (
    <div className="brewery">
      <h2>{props.name}</h2>
      <h4>Type: {props.type}</h4>
      <h4>City: {props.city}</h4>
    </div>
  );
};

export default Brewery;
