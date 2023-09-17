
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
    <div className="App bg-white h-screen">
      <h1 className="text-7xl font-bold text-blue-800  pt-8  mb-14 underline">Git Hub App</h1>
      <Form onSubmit={addProfile}/>
      <CardList profiles={profiles}/>
    </div>
  );
}

export default App;
