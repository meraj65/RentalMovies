import React, { Component } from "react";
class Heart extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return <i className={classes} aria-hidden="true"></i>;
  }
}

export default Heart;  
  