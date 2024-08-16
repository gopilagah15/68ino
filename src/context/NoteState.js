import React, { useState } from 'react'
import noteContext from './noteContext' 

const NoteState = (props) => {
    const notesinitial = [];
    const host = "http://localhost:5000" 
    const [notes, setnotes] = useState(notesinitial)

    const getAllnotes=async()=>{
       
      //API CALL
    
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",    
             headers: {
              "Content-Type": "application/json",
            "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiZWY0NmVmZmMzMmU2NTgzNjAyNTM5In0sImlhdCI6MTcyMzc5MDQ0Nn0.xdDXnH-aJeLLVDzfj4C8yPYHmT4-O81T9hrjv09ODVo'
             },
                 });
        const json = await response.json();   
        console.log(json)
        setnotes(json)
    
    }
    const addNote=async(title,description,tag)=>{
       //API CALL
    
       const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiZWY0NmVmZmMzMmU2NTgzNjAyNTM5In0sImlhdCI6MTcyMzc5MDQ0Nn0.xdDXnH-aJeLLVDzfj4C8yPYHmT4-O81T9hrjv09ODVo'
           },
               body: JSON.stringify({title,description,tag}),  
               });
      const json = await response.json();   
      console.log(json)
      setnotes(notes.concat(json))

    }
    const editNote=async(id,title,description,tag)=>{

       //API CALL
    
       const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiZWY0NmVmZmMzMmU2NTgzNjAyNTM5In0sImlhdCI6MTcyMzc5MDQ0Nn0.xdDXnH-aJeLLVDzfj4C8yPYHmT4-O81T9hrjv09ODVo'
           }, 
               body: JSON.stringify({title,description,tag}),  
               });
      const json = await response.json();   
      console.log(json)
      const newNotes = JSON.parse(JSON.stringify(notes));
      for(let index = 0; index<newNotes.length; index++){
        const element = newNotes[index];
        if(element._id === id){ 
          element.title = title;
          element.description = description;
          element.tag = tag;
          break; 
        }
      }
      setnotes(newNotes)
    }
    const deleteNote=async(id)=>{

       //API CALL
    
       const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiZWY0NmVmZmMzMmU2NTgzNjAyNTM5In0sImlhdCI6MTcyMzc5MDQ0Nn0.xdDXnH-aJeLLVDzfj4C8yPYHmT4-O81T9hrjv09ODVo'
           }, 
               });
      const json = await response.json();   
      console.log(json);
      const deletenote = notes.filter((note)=>{return note._id!==id});
      setnotes(deletenote)
    }
  return (
    <noteContext.Provider value={{notes,getAllnotes,addNote,editNote,deleteNote}}>
        {props.children}
    </noteContext.Provider>
  )
}

export default NoteState