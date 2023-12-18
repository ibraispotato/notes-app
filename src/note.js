
import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { click } from '@testing-library/user-event/dist/click';
import Quote from "./info"
function TodoText({clickMe, task,deleteNotes}) {
    function no()  {
        task("")
        }
    return (
        <div id="all" class="all">
        <div id="text" class="text">
            <div id="text" className="hero">
                <div className={`notes ${task.complete ? "complete" : ""}`}>
                        
          <p  className="notee" spellcheck="false">{task.task}</p>  
                        
                </div>
                
                
          {/* <textarea onChange={(e)=>setValue(e.target.value)} value={value} id="note" class="note" placeholder="Empty note" /> */}
                    {/* <button id="btn" class="btn">+</button> */}
                    
                    <div className='btnsdeleAndEdit'>
                        <FontAwesomeIcon className="fatrash" icon={faTrash} onClick={()=> deleteNotes(task.id)}/>
                    </div>
                    
                </div>
            </div>
            </div>
       
    

    )
}
export default TodoText