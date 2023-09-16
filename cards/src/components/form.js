import React, { useState } from "react";
import axios from "axios";


function Form(props) {
    const [name,setName]=useState("");
   async  function handleSubmit(event) {
        event.preventDefault();
        const resp = await  axios.get(`https://api.github.com/users/${name}`)
     console.log(resp.data);
    props.onSubmit(resp.data);
     setName("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type={"text"}  class="w-19 px-4 py-2 text-center text-gray-900 bg-blue-300 rounded-md dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 hover:bg-blue-400"
      onChange={(event)=>{
        setName(event.target.value);
  }}
        value = {name}
        ></input>
      {/* <button type="submit" className="bg-gray-400 text-white text-1xl">Add</button> */}
      {<button type="submit"class="px-3 py-2 text-2l text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100 font-bold">Add</button> }
      </form>
    </div>
  );
}

export default Form;
