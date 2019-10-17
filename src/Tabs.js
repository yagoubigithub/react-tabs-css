import React, { Component } from "react";

import styles from './react-tabs-css.module.css';

export default class Tabs extends Component {

  render() {
    return (
      <div
        className={styles.tabs}
        
      >
        {this.props.children}
      </div>
    );
  }
}
