import React from "react";

const Brewery = props => {
  console.log("props from Brewery", props);
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.type}</h4>
    </div>
  );
};

export default Brewery;
