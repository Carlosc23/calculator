import React, { Component } from 'react';
import './screen.css'
import myObject from './utils/changeScreen';
export default class screen extends Component {
  constructor(props) {
      super(props)
      this.state = {
          text: "Initial State"
      }
     myObject.updateText = myObject.updateText.bind(this)
  }
render() {
  return(

    <div className="screen">{this.state.text}</div>
  );
}

}
