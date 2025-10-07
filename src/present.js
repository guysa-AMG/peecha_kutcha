import { Link, useLocation } from "react-router-dom";
import CountDown from "./count";
import { Runware } from "@runware/sdk-js";
import { useEffect,useState } from "react";
import { GoogleGenAI } from "@google/genai";
import {motion} from "motion/react"
import { Button } from "@mui/material";


let Present = ()=>{
           let loc = useLocation();

           let [query,setQuery] = useState(loc.state)
            let [count,setCount] = useState(0)
             let [start,SetStart]=useState(true)
             let [startimer,SetStartTimer]=useState(false)
           let [Images,setImages] = useState([])
           let [total,setTotal] = useState(0)

function shuffle(arr) {
  let currentIndex = arr.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}
let req = async(query)=>{

let res =await fetch(`http://localhost/gen/${query}`)
if (res.ok){
    let data = await res.json()
    let urls = shuffle(data["images"])
    setImages(urls)
   
    
}




}
let next=()=>{
    if (count ==5){
        SetStart(true)
    }else{
        setCount(prev=>((prev+1)))
    }
    
    
}
let startTimer =()=>{
    
}
let togglefs=()=>{
    
    document.body.requestFullscreen()
}

             
 useEffect(()=>{
 req(query)
setTotal(Images.length)

 },[])
    return(
         <header className="App-header">
           <Link className="close" to="/">x</Link>
           <div className="fs" onClick={togglefs}>[  ]</div>
        {start?<div><h1>Ready</h1>
        
                {startTimer?  <div className="side_timer"><CountDown  tm={60} func={()=>{SetStart(false)}} /></div>:<Button onClick={()=>{SetStartTimer(true)}} >start</Button>}</div>
        :""}
        {start?" ":<motion.img initial={{opacity:0}}  transition={{duration:2}} animate={{opacity:1}} exit={{opacity:0}} width="100%" height="100%" id="slide"  src={Images[count]}/>}
          {start?" ":<div className="side_timer"><CountDown  tm={10} func={next} /></div>}
        </header>

    );
}

export default Present;