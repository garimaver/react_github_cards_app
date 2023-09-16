import React, { useState } from "react";
import axios from "axios";


function Form() {
    const [name,setName]=useState("");
    function handleSubmit(event) {
        event.preventDefault();
        //console.log(name);
        const resp = await
    }
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
