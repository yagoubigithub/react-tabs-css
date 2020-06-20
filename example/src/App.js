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
      <Tab active title="hello" index="1" group="a">

<h1>Hello world</h1>
      </Tab>
        <Tab index="2" group="a" title="halla bel khamiise">

<h1>Halla belkamiisee</h1>
        </Tab>

      
      </Tabs>
  
      </div>
     
    );
  }

}
