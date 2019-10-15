import React, { Component } from "react";

import { Tab, Tabs } from "react-tabs-css";
import  'react-tabs-css/styles/react-tabs-css.css'
export default class App extends Component {
  render() {
    return (
      <Tabs >
        <Tab index={0} title="Hello word">
          <input type="text" />
        </Tab>

        <Tab index={1} title="Hello 1244ed,zed,ezd" checked
        >
          <h2>Hello world</h2>
          <p>Hello</p>
          <p>lorem14</p>
        </Tab>
      </Tabs>
    );
  }
}
