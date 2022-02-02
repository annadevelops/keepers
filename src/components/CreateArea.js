import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {value, name} = event.target;
    
    setNote(prevValue => {
      return { ...prevValue, [name]: value }
    })
    }
  
    function submitNote(event){
      props.onAdd(note);
      event.preventDefault();
    }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
