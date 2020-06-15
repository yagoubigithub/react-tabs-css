import React, { Component } from "react";

import styles from './react-tabs-css.module.css';

export default class Tabs extends Component {

  render() {
    const {style} = this.props;
    return (
      <div style={{width : "100%", display: "block", height :  "auto" , overflowX : "auto",  marginBottom :  25}}>
  <div
        className={styles.tabs}
        style={{...style}}
        
      >
        {this.props.children}
      </div>
      </div>
    
    );
  }
}
