import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";

import Brewery from "./Brewery";

const BreweryList = props => {
  return (
    <>
      <h1>Welcome to all the Beer you can handle!</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="circles" color="indigo" height="15" width="100" />
        ) : (
          "Find the closest beer."
        )}
      </button>
      {props.breweries &&
        props.breweries.map(place => (
          <Brewery key={place.name} place={place} />
        ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    breweries: state.breweries
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(BreweryList);
