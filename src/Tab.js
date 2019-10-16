import React, { Component } from "react";

export default class Tab extends Component {
    
  componentDidMount(){
    if(this.props.index === 0){
      this.myinput.checked = true;

    }
  }
  render() {
    const { index } = this.props;
    return (
      <div
        className={"tab"}
      >
        <input
          type="radio"
          ref={input=>this.myinput = input}
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
