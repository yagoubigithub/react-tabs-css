import React, { Component } from "react";
import styles from './react-tabs-css.module.css';
export default class Tab extends Component {
    


  componentDidMount(){
    if(this.props.index === 0){
      this.myinput.checked = true;

    }
  }
  render() {
    const { index , group ,title ,style } = this.props;
    return (
      <div
        className={styles.tab}
        style={{...style}}
      >
        <input
          type="radio"
          ref={input=>this.myinput = input}
          id={`tab-${index}`}
          name={`group-${group}`}
          className={styles.tab_input}
        
         
        />
        <label
          htmlFor={`tab-${index}`}
         className={styles.tab_label}
         onClick={this.props.onClick}
        >
          {title}
        </label>

        <div  className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}
