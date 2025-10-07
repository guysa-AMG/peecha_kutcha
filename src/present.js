import { useLocation } from "react-router-dom";
import CountDown from "./count";
import { Runware } from "@runware/sdk-js";
import { useEffect,useState } from "react";




let Present = ()=>{
           let loc = useLocation();

           let [query,setQuery] = useState(loc.state)
           let [images,setImages] = useState([])

let req = async(query)=>{
const runware = new Runware({apiKey:"DN45XPYYsY2mOyozmy9HOqQH2uzvZhpy"})
const img = await runware.requestImages({positivePrompt:query,width:1024,height:1024})
setImages(img)
console.log(img)
return img
}
           
 useEffect(()=>{
let img = req(query)

console.log(img)
 },[])
    return(
         <header className="App-header">
        <h1>Ready</h1>
            
        </header>

    );
}

export default Present;