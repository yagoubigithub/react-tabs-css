import React, { Component } from "react";

export default class Tabs extends Component {
  render() {
    return (
      <div
        className={"tabs"}
        
      >
        {this.props.children}
      </div>
    );
  }
}
