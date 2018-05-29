import React from "react";
import { connect } from "react-redux";

const Main = () => (
  <div id="body">
    <h1>Boilerplate App</h1>
    <p>boilerplate for full stack javascript web applications</p>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
