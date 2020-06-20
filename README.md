# react-tabs-css

> 

[![NPM](https://img.shields.io/npm/v/react-tabs-css.svg)](https://www.npmjs.com/package/react-tabs-css) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## Demo
https://react-tabs-css.netlify.app/

## Install

```bash
npm install --save react-tabs-css
```

## Usage

```jsx
import React, { Component } from 'react'

import { Tab, Tabs } from "react-tabs-css";

class Example extends Component {
  render () {
    return (
      <Tabs >
        <Tab index={0} title="Tab 1" group="group-1">
          <h1>Tab 1</h1>
          <input type="text" placeholder="tab 1"/>
        </Tab>

        <Tab index={1} title="Tab 2" 
        active
        group="group-1"
        >
          <h2>Tab 2</h2>
          <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
         
        </Tab>
      </Tabs>
    )
  }
}
```
## Props
```Tabs``` props : 
- style : Object (exmple : ```style={{backgroundColor :  "red"}}```)

```Tab``` props : 
- index* : (required and unique) Number(exmple : ```index={0}```)
- style : Object (exmple : ```style={{backgroundColor :  "red"}}```)
- group* : String (exmple : ```group="group-1"```) all the tab inside the tabs should have the same group
- title : String (exmple : ```title="Hello world"```)
- active : boolean (example : ```active={true})


## License

MIT © [yagoubi abdelkader](https://github.com/yagoubigithub)
