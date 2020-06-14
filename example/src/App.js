import React, { Component } from "react";

import { Tab, Tabs } from "react-tabs-css";
export default class App extends Component {
  click =(id)=>{
    console.log(id)
  }
  render() {
    return (
      <Tabs >
      {[1,2,3,4,5,6,7,8,9].map((item,index)=>{
        return (<Tab index={index} title="Hello word" onClick={()=>this.click(index)}>
          <h1>Tab {item}</h1>
          <h1>Tab {item}</h1>
          <h1>Tab {item}</h1>
          <h1>Tab {item}</h1>
          <p>lorem</p>
          <input type="text" placeholder="tab 1"/>
        </Tab>)
      })}
        

      
      </Tabs>
    );
  }

}
