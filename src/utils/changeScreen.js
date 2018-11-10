var currentText ="";
function updateText(text){
  currentText += text;
  if (text==""){
    currentText ="";
  }
  console.log(currentText);
  this.setState({currentText})
//  console.log("this")
}

export default { updateText }
