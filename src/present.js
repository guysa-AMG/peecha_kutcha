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
             let [finished,setFinished] = useState(false)
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

let res =await fetch(`https://pecha-kucha-cors-proxy.vercel.app/gen/${query}`)
if (res.ok){
    let data = await res.json()
    let urls = shuffle(data["images"])
    setImages(urls)
   
    
}




}
let next=()=>{
    
    setCount(prev=>prev+1)
    
    
    
}
let startTimer =()=>{
    
}
let togglefs=()=>{
    if (document.fullscreenEnabled){
        document.exitFullscreen()
    }
    else{
      document.body.requestFullscreen()
    }
    
}

             
 useEffect(()=>{
 req(query)
setTotal(Images.length)
setTimeout(() => {
  setFinished(true)
}, 130000);

 },[])
    return(
         <header className="App-header">
           <Link className="close" to="/">x</Link>

           <div className="fs" onClick={togglefs}>[  ]</div>
        {finished?<div><h1> Congratulations 🎉 </h1><div className="space"></div> <Button><Link className="again" to="/">Go Again</Link></Button></div>:""}
        {start && finished==false?<div><h1>Ready</h1>
        
                {finished==false?startTimer?  <div className="side_timer"><CountDown  tm={30} func={()=>{SetStart(false)}} /></div>:<Button onClick={()=>{SetStartTimer(true)}} >start</Button>:""}</div>
        :""}
        {start || finished ?" ":<motion.img initial={{opacity:0}}  transition={{duration:2}} animate={{opacity:1}} exit={{opacity:0}} width="100%" height="100%" id="slide"  src={Images[count]}/>}
          {start|| finished?" ":<div className="side_timer"><CountDown  tm={20} func={next} /></div>}
        </header>

    );
}

export default Present;
