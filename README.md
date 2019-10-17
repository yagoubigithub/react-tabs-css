# react-tabs-css

> 

[![NPM](https://img.shields.io/npm/v/react-tabs-css.svg)](https://www.npmjs.com/package/react-tabs-css) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
        <Tab index={0} title="Tab 1">
          <h1>Tab 1</h1>
          <input type="text" placeholder="tab 1"/>
        </Tab>

        <Tab index={1} title="Tab 2" 
        >
          <h2>Tab 2</h2>
          <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
         
        </Tab>
      </Tabs>
    )
  }
}
```

## License

MIT © [yagoubi abdelkader](https://github.com/yagoubigithub)
