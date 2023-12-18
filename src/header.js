
import React, { useEffect, useState } from "react";
import TodoText from "./note";
import Quote from "./info"
import { v4 as uuidv4 } from 'uuid'
uuidv4()
function Head() {
    const [texts, setTest] = useState( JSON.parse(localStorage.getItem("notes"))||[])
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(texts))
    },[texts])
    const addNotes = (note) => {
        setTest([...texts , {id:uuidv4(), task:note, complete:false, deleteNotes:false}])
    }
    const clickMe = (id) => {
        setTest(texts.map(text => text.id === id ? {
                ...text, complete: !text.complete
        }: text))
    }
    const deleteNotes = (id) => {
        setTest(texts.filter(text => text.id !== id))
        }
    console.log(texts)
    return (
        <div className="texto">
            
            {texts.map((text, index) => (
                < TodoText key={index} task={text} clickMe={clickMe} deleteNotes={deleteNotes} /> 
            ))}
            <Quote addNotes={addNotes} clickMe={clickMe} />
        </div>
    )
}

export default Head