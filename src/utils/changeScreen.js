/* eslint no-eval: 0 */
let currentText = '';
let flag = false;
let flag2 = false;
let temp = '';
let temp2 = '';

function updateText(text) {
  currentText = temp;
  let last = text;
  if (last === '÷' || last === 'x' || last === '-' || last === '+' || last === '%') {
    flag = true;
  }
  last = currentText.slice(-1);
  if (last === '÷' || last === 'x' || last === '-' || last === '+' || last === '%') {
    flag2 = true;
  }
  currentText += text;
  if (text === '') {
    currentText = '';
  } else if (text === 'del') {
    currentText = currentText.substring(0, currentText.length - 4);
  } else if (text === '=') {

    currentText = currentText.substring(0, currentText.length - 1);
    currentText = currentText.replace('x', '*');
    currentText = currentText.replace('÷', '/');
    currentText = eval(currentText);
    if (currentText.toString().includes('-') || currentText > 999999999) {
      currentText = 'Math Error';
    }
    currentText = currentText.toString();
    temp2 = '';
  } else if (currentText.includes('Error')) {
    currentText = '';
  }
  if (currentText.length >= 9) {
    currentText = currentText.substring(0, 9);
  }
  temp = currentText;
  if (flag) {
    currentText = currentText.substring(0, currentText.length - 1);
    flag = false;
  }
  //temp2+=text;
  if (flag2) {
    temp2 += text;
    currentText = temp2;
    flag2 = false;
  }

  if (currentText.toString().includes('÷') || currentText.toString().includes('x') || currentText.toString().includes('-') || currentText.toString().includes('+') || currentText.toString().includes('%')) {
    temp2 += text;
    currentText = temp2;
  }
  this.setState({
    currentText,
  });
}

export default {
  updateText,
};
