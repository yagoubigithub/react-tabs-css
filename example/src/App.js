import React, { Component } from "react";

import { Tab, Tabs } from "react-tabs-css";
import  'react-tabs-css/styles/react-tabs-css.css'
export default class App extends Component {
  render() {
    return (
      <Tabs >
        <Tab index={0} title="Hello word">
          <h1>Tab 1</h1>
          <input type="text" placeholder="tab 1"/>
        </Tab>

        <Tab index={1} title="Hello 1244ed,zed,ezd" checked
        >
          <h2>Tab 2</h2>
          <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
         
        </Tab>
      </Tabs>
    );
  }
}
