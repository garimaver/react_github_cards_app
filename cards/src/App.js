
import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Form from './components/Form';


function App() {
 let [profiles,setProfiles]=useState("");
 function addProfile(profiledata) {
  setProfiles([...profiles,profiledata]);
}
  return (
    <div className="App  ">
      <h1 className="text-7xl font-bold text-white pt-8  mb-14">Git Hub App</h1>
      <Form onSubmit={addProfile}/>
      <CardList profiles={profiles}/>
    </div>
  );
}

export default App;
