import React, { useState } from "react";


function Form() {
    const [name,setName]=useState("");
    function handleSubmit() {}
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type={"text"} 
      onChange={(event)=>{
        setName(event.target.value);
    }}
        value = {name}
        ></input>
      <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
