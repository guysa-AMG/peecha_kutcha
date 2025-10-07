import { useEffect, useState } from "react"


let CountDown=(val)=>{

let count=20
let [cnt,setCnt] = useState(count)

useEffect(()=>{

let tv =setInterval(()=>{setCnt((rev)=>rev-0.5)},1000)
setTimeout(()=>{clearInterval(tv)},cnt*1000);



},[])
    
return(
    <header className="App-header">
        <h1>{cnt}</h1>
    </header>
)
}
export default CountDown;