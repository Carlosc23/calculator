import React, { Component } from 'react';
import './button.css';
import myObject from './utils/changeScreen';
const buttons = ["C", "⁺∕₋", "%", "del", "7", "8", "9", "÷", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"];
export default class button extends Component {


render() {
  return(

      <ul className="number-div">{
         buttons.map((num,key) => {
           if(num==="C"){
             console.log(num);
             return  <li value={num} onClick={(e) => {myObject.updateText("")}} id="equals3" key={num}  >{num}</li>
           }
           else if (num==="="){
             console.log(num);
                return  <li onClick={(e) => {myObject.updateText(num)}} id="equals" key={num} >{num}</li>
           }
           else if(num==="÷"||num==="x"||num==="-"||num==="+"){
             console.log(num);
                 return  <li onClick={(e) => {myObject.updateText(num)}} id="equals2" key={num} >{num}</li>
           }
           else if(num==="⁺∕₋"){
             return  <li   key={num}  >{num}</li>
           }

          else {
              return  <li onClick={(e) => {myObject.updateText(num)}}  key={num}  >{num}</li>
          }
        }
          )
      }</ul>
  );
}



}
