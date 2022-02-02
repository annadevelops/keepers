import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [newNotes, setNewNotes] = useState([]);
    
function addNote(note){
  setNewNotes(prevNotes => {
    return [...prevNotes, note];
  });
}

function deleteNote(id){
  setNewNotes(prevNotes => {
    return prevNotes.filter((newNote, index) => {
      return index !== id;
    });
  });

}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {newNotes.map((newNote, index) => {
          return (
            <Note 
            key={index} 
            id={index} 
            title={newNote.title} 
            content={newNote.content} 
            onDelete={deleteNote} />
        );
      })};
      
      <Footer />
    </div>
  );
}

export default App;


// 1. How do we save the notes created when we click the save button?