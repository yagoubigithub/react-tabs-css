import React, { Component } from "react";

import { Tab, Tabs } from "react-tabs-css";
export default class App extends Component {
  click =(id)=>{
    console.log(id)
  }
  render() {
    return (
      <div  style={{boxShadow : "1px 1px 5px black", margin : 15,padding : 15}}>
 <Tabs >
      {[1,2,3,4,5,6,7,8,9].map((item,index)=>{
        return (<Tab  index={index} title={`Tab ${item}`} onClick={()=>this.click(index)} group="group-1">
          <h1>Tab {item}</h1>
          <h1>Tab {item}</h1>
          <h1>Tab {item}</h1>
          <h1>Tab {item}</h1>
          <p>lorem</p>
          <input type="text" placeholder="tab 1"/>
        </Tab>)
      })}
        

      
      </Tabs>
  
      </div>
     
    );
  }

}
