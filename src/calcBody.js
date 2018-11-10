import React, { Component } from 'react';
import './calcBody.css'
import Screen from './screen';
import Button from './button';
export default class calcBody extends Component {
render() {
  return(

    <div className="main-div">
<Screen/>
<Button/>
    </div>
  );
}

}
