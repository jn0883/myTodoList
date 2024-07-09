"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setmaintask([...maintask,{title, desc}])
    console.log(title)
    console.log(desc)
    settitle("");
    setdesc("");
  }

  const deleteHandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i,1);
    setmaintask(copytask)
  }

  let rendertask = <h2 className="font-bold text-2xl">No Tasks Available.</h2>;
  if(maintask.length>0){
  rendertask = maintask.map((t, i) => {
    return (
      <li  className="flex items-center justify-between mb-8">
        <div className="flex justify-between mb-5 w-2/3">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6 className="text-xl font-semibold">{t.desc}</h6>
      </div>
      <button onClick = {()=>{
        deleteHandler(i);
      }} className="bg-red-400 text-white text-xl rounded px-2 py-2">Delete</button>
      </li>
    );
  });
}
  

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
     Todo List
    </h1>
    <form onSubmit={handleSubmit}>
      <input type = "text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' 
      placeholder='Enter Task here'
      value = {title}
      onChange = {(e)=>{
        settitle(e.target.value)
      }}
      />
      <input type = "text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' 
      placeholder='Enter Description here'
      value = {desc}
      onChange = {(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      <hr/>
      <div className="p-8 bg-slate-200">
        <ul>{rendertask}</ul>
      </div>
    </form>
    </>
  )
}

export default page;