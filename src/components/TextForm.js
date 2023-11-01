import React, {useState} from 'react'

export default function TextForm(props) {

const handleOnChange = (event) => {
  console.log('changing value');
  setText(event.target.value);
}

const handleUpClick = () => {
  console.log("clicking the button "+ text);
  let txt = text.toUpperCase();
  setText(txt);
  props.showAlert("Converted to uppercase","success");
}

const handleLoClick = () => {
  console.log("clicking the button "+ text);
  let txt = text.toLowerCase();
  setText(txt);
  props.showAlert("Converted to lowercase","success");
}

const handleClearClick = () => {
  let txt = '';
  setText(txt);
  props.showAlert("Data has been cleared","successfully");
}

const handleCopy = () => {
  console.log("copy");
  var text = document.getElementById('myTextBox');
  text.select();
  // text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Data has been copied","successfully");
}

const handleSelectAll = () => {
  var txt = document.getElementById('myTextBox');
  txt.select();
  props.showAlert("Data has been selected","successfully");
}

const handleExtraSpaces = () => {
  let txt = text.split(/[ ]+/);
  setText(txt.join(" "));
  props.showAlert("Extra spaces has been removed","successfully");
}

const [msg, setMsg] = useState("Enter text here");
const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h3 className='mt-3 pb-2'>{ props.heading }</h3>

      <div className="mb-3">
          <textarea className="form-control" id="myTextBox" rows="3" value={ text } placeholder={msg} onChange={handleOnChange} style={{ backgroundColor : props.mode === 'dark' ? 'rgb(71, 128, 93)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
      </div>

      <div className="mb-3">
          <button className='btn btn-primary' onClick={handleUpClick}>Convert Uppercase</button>
          <button className='btn btn-primary ms-3' onClick={handleLoClick}>Convert Lowercase</button>
          <button className="btn btn-primary ms-3" onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary ms-3" onClick={handleCopy}>Copy</button>
          <button className="btn btn-primary ms-3" onClick={handleSelectAll}>Select All</button>
          <button className="btn btn-primary ms-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

    </div>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>Summary of text</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Reading Time: {0.008 * (text.split(" ").length)} min </p>
      <h1>Preview: </h1>
      <p> {text.length > 0 ? text:'Enter any text to preview'} </p>
    </div>
    </>
  )
}
