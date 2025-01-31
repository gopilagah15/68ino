import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/noteContext'
import Noteitem from './Noteitem';

const Notes = () => {
  const ref = useRef(null);
 const refClose = useRef(null);
  const context = useContext(noteContext);
  const {notes,getAllnotes,editNote} = context; 
  const [note, setnote] = useState({id:'',etitle:'',edescription:'',etag:''});
  
  const handleClick=(e)=>{
    e.preventDefault();
    refClose.current.click();
    editNote(note.id,note.etitle,note.edescription,note.etag);
    setnote({title:'',description:'',tag:''})
  }
  const onChange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value});
 }
  const updateNote=(currentNote)=>{
    ref.current.click();
    setnote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }
 
  useEffect(()=>{
    getAllnotes();
    // eslint-disable-next-line
  },[])
  return (
    <div>

<button  ref={ref}type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  
  </button>
  
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
         
         
  
  
    <form className='my-3'>
    <div className="mb-3">
      <label htmlFor="etitle" className="form-label">Title</label>
      <input type="text" className="form-control" id="etitle"  name="etitle" value={note.etitle}aria-describedby="emailHelp" onChange={onChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="edescription" className="form-label">Description</label>
      <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="etag" className="form-label">Tag</label>
      <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange}/>
    </div>
    
  </form>
  
  
  
  
  
  
        </div>
        <div className="modal-footer">
          <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button  onClick={handleClick} type="button" className="btn btn-primary">Update note</button>
        </div>
      </div>
    </div>
  </div>
  
      {notes.map((note)=>{
        return <Noteitem note = {note} updateNote={updateNote}/>
      })}
    </div>
  )
}

export default Notes
