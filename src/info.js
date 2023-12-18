/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from "react";

function Quote({addNotes,clickMe,task}) {
  const [value ,setValue] = useState("")
  function click(e) {
    e.preventDefault();
    addNotes(value)
    setValue(value)
    setValue("")
  }
  // console.log(clickMe)
  
  return (
    <div className="hero">
    <form onSubmit={click} className="container">
        <div className="up">
          
        </div>
        <div id="all" className="all">
          <div id="text" className="text">
            
          <textarea onChange={(e)=>setValue(e.target.value)} value={value} id="note" className="note" placeholder="Empty note" />
                <button onClick={(e)=>clickMe()} id="btn" className="btn">+</button>
        </div>
        </div>
    </form>
</div>
    )
    
}

export default Quote