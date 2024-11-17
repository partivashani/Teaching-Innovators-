import { useState } from 'react'
// import './App2.css'

function App2() {

  let [count,setcount] = useState(1)
  const [bgcolor, setbgcolor] = useState("")
  const [colorname, setcolorname] = useState("")

  const bgcolorchange = (color)=>{
    setbgcolor(color)
    let colorname = color.split("-")[1]
    setcolorname(colorname)
  }

// let count = 1

return (
 
//   <div className='flex justify-center items-center flex-col h-screen'>
// <div className="text-red-500 text-3xl my-3">{count}</div>
// <button className='p-2 bg-orange-400 text-white rounded-md' onClick={()=>{
// setcount(count + 1)
// console.log(count)
// }}>increase</button>


//   </div>

<div className={`flex justify-center items-center flex-col h-screen ${bgcolor}`} >
  <h1>color name : {colorname}</h1>
  <div className="w-11 h-11 bg-red-500 m-4" onClick={()=> bgcolorchange("bg-red-500")}></div>
  <div className="w-11 h-11 bg-green-500 m-4" onClick={()=>bgcolorchange("bg-green-500")}></div>
  <div className="w-11 h-11 bg-blue-500 m-4" onClick={()=>bgcolorchange("bg-blue-500")}></div>
</div>
)

}


export default App2