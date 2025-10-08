import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css"
import { useNavigate } from "react-router-dom";


let  Home = ()=>{
   let  [value,setValue]=useState("")
  
   let nav =useNavigate();
  
   let handle=()=>{
nav("/presentation",{state:value})
   }
  
    return (
        <header className="App-header">
          <h1>Pecha Kucha</h1>
       <TextField  value={value} onChange={(e)=>{ setValue(e.target.value)}} placeholder='Topic' />
       <div className="space"></div>
       <Button onClick={handle} >search</Button>
       </header>
    );
} 
export default Home;