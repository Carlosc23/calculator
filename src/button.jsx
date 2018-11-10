import React, { Component } from 'react';
import './button.css';
import myObject from './utils/changeScreen';
export default class button extends Component {


render() {

  return(

    <ul className="number-div">
    <li id="equals3">C</li>
    <li onClick={(e) => {myObject.updateText("-")}}>⁺∕₋</li>
    <li>%</li>
						<li>del</li>	             <li>7</li>
										 <li>8</li>
										 <li>9</li>
<li id="equals2">÷</li>
										 <li>4</li>
										 <li>5</li>
										 <li>6</li>
<li id="equals2">x</li>
										 <li>1</li>
										 <li>2</li>
										 <li>3</li>
<li id="equals2">-</li>
										 <li>0</li>
										 <li>.</li>

										 <li id="equals">=</li>
 <li id="equals2">+</li>


							   </ul>
  );
}

}
