"use client"
import { useState } from "react";

export default function Counter(){
const [count,setCount] = useState(0);

function tambah(){
    setCount(count + 1 )
}
return(
<>

<button className="bg-white w-10 h-5 z-100" onClick={tambah}>click</button>
<h1 className="text-white text-5xl">angka ke{count}</h1>
</>
)
}
