
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
    <div className="App">
      <h1>Github App</h1>
      <Form onSubmit={addProfile}/>
      <CardList profiles={profiles}/>
    </div>
  );
}

export default App;
