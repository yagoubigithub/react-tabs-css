import React, { Component } from "react";

export default class Tab extends Component {
    
  render() {
    const { index } = this.props;
    return (
      <div
        className={"tab"}
      >
        <input
          type="radio"
          id={`tab-${index}`}
          name="tab-group-1"
        
         
        />
        <label
          htmlFor={`tab-${index}`}
         
        >
          {this.props.title}
        </label>

        <div className={"content"}>{this.props.children}</div>
      </div>
    );
  }
}
