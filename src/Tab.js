import React, { Component } from "react";
import styles from './react-tabs-css.module.css';
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
        className={styles.tab}
      >
        <input
          type="radio"
          ref={input=>this.myinput = input}
          id={`tab-${index}`}
          name={this.props.group}
          className={styles.tab_input}
        
         
        />
        <label
          htmlFor={`tab-${index}`}
         className={styles.tab_label}
         onClick={this.props.onClick}
        >
          {this.props.title}
        </label>

        <div  className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}
