import { useEffect, useState } from "react"


let CountDown=({tm=20,func})=>{

let count=tm
let [cnt,setCnt] = useState(count)
let reset = ()=>{
    setCnt(count)
    timer()
}
useEffect(()=>{

timer()
},[])

let timer = ()=>{
let tv =setInterval(()=>{setCnt(prev=>prev-1)},1000)

setTimeout(()=>{clearInterval(tv);func();reset()},cnt*1000);

}
    
return(
 
        <h1>{cnt}</h1>
   
)
}
export default CountDown;