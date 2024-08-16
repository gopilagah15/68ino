import React, { useContext, useState } from 'react'
import noteContext from '../context/noteContext'
import Notes from './Notes';

const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote} = context;
  const [note, setnote] = useState({title:'',description:'',tag:''});
  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setnote({title:'',description:'',tag:''})
  }
  const onChange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value});

  }
  return (
    <>
       <form onSubmit={handleClick}> 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} aria-describedby="emailHelp"/>
     </div>
   <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputTag1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange}   />
  </div>
  
  <button   type="submit" className="btn btn-primary"  >Add Note</button>
</form> 

<Notes/>
    </>
  )
}

export default AddNote