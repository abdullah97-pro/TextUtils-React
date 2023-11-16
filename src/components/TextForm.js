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
  // console.log("copy");
  // var text = document.getElementById('myTextBox');
  // text.select();
  // text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text);
  // document.getSelection().removeAllRanges();
  props.showAlert("Copied to Clipboard","successfully");
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
          <textarea className="form-control" id="myTextBox" rows="3" value={ text } placeholder={msg} onChange={handleOnChange} style={{ backgroundColor : props.mode === 'dark' ? 'rgb(33, 77, 70)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
      </div>

      <div className="mb-3">
          <button disabled={text.length===0} className='btn btn-primary my-1' onClick={handleUpClick}>Convert Uppercase</button>
          <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSelectAll}>Select All</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

    </div>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>Summary of text</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>Reading Time: {0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} min </p>
      <h1>Preview: </h1>
      <p> {text.length > 0 ? text:'Nothing to Preview'} </p>
    </div>
    </>
  )
}
