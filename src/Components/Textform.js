import { useState } from "react";
export default function Textform(props) {
  const [text , settext] = useState("");
  const handleupclick = () =>{
    let newtext = text.toUpperCase();
    settext(newtext);
  }
  const handleonchange = (event) =>{
    settext(event.target.value);
  }
  const handledownclick = () =>{
    let newtext = text.toLowerCase();
    settext(newtext);
  }
  const cleartext = () => {
    let newtext = ("");
    settext(newtext);
  }
  const copytext = () => {
    let text = document.getElementById('my-box');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
    return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="my-box" rows="8" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handledownclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={cleartext}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={copytext}>Copy text</button>
    </div>
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text summary : </h1>
        <p>{text.split(" ").length}words , {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes remaining to complete</p>
        <p>{text.length>0?text:'Enter something in the text box above to preview it'}</p>
    </div>
    </>
  );
}
