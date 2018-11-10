import React, { Component } from 'react';
import './button.css';
import myObject from './utils/changeScreen';
const buttons = ["C", "⁺∕₋", "%", "del", "7", "8", "9", "÷", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"];
export default class button extends Component {


render() {
  return(

      <ul className="number-div">{
         buttons.map((num) => {
           if(num=="C"){
             return  <li id="equals3" key={num} >{num}</li>
           }
           else if (num=="="){
                return  <li id="equals" key={num} >{num}</li>
           }
           else if(num=="÷"||num=="x"||num=="-"||num=="+"){
                 return  <li id="equals2" key={num} >{num}</li>
           }

          else {
              return  <li  key={num} >{num}</li>
          }
        }
          )
      }</ul>
  );
}



}
