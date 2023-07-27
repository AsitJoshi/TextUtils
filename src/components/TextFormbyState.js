import React,{useState}from 'react';
//hooks help us to use class properties in func comp

export default function TextFormbyState(props) {
  const [text,setText]=useState("");
 
  const upCase = ()=>{
    // console.log("upper case fired");
    let newText=text.toUpperCase();
    setText(newText);
  }
  const lowCase = ()=>{
    // console.log("upper case fired");
    let newText=text.toLowerCase();
    setText(newText);
  }


  const change = (event)=>{
    // console.log("changed");
    setText(event.target.value);
    
  }

  const clrText = ()=>{
    setText('');
  }

  return (
    <>
    <div className='container'>
      <div className="mb-3" >
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
       
        <textarea className="form-control" onChange={change} id="myBox" rows="3" value={text} style={{backgroundColor:props.mode==='light'?'white':'#21233f',color:props.mode==='light'?'black':'white'}}></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-1" onClick={upCase} >To upper case</button>
      <button className="btn btn-primary mx-3 my-1" onClick={lowCase} >To lower case</button>
      <button className="btn btn-primary mx-3 my-1" onClick={clrText} >Clear Text</button>
    </div>
    <div className="container my-5">
      <h1 style={{color:props.mode==='light'?'black':'white'}} contentEditable>Your Text summary</h1>
      <p style={{color:props.mode==='light'?'black':'white'}}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
      {/* <p style={{color:props.mode==='light'?'black':'white'}}>You will require around {.008*text.split(" ").length} Minutes to read this</p> */}
      <p style={{color:props.mode==='light'?'black':'white'}}>You will require around {Number(.008*text.split(" ").length)} Minutes to read this</p>
      <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
      <p style={{color:props.mode==='light'?'black':'white'}}>{text}</p>
    </div>
    </>
  )
}
