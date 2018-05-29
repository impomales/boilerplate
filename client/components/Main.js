import React from "react";
import { connect } from "react-redux";

const Main = () => <h1>Boilerplate</h1>;

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
