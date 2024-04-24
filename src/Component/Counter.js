import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Counter = () => {
    const [count,setcount]=useState(0)
    const [name,setname]=useState("Abhinav")
    const changename=()=>{
        setname("Kannan")
    }
    const Increament=()=>{
        setcount(count+1)
    }
    const Degrement=()=>{
        setcount(count-1)
    }
    
  return (
    <div>
        <h1>The name of the owner of this site is "{name}" </h1>
        <Button onClick={changename} variant="dark">Click to change the name</Button>
        <h2>The Countis : {count} </h2>
        <Button  variant="success" onClick={Increament}>+</Button>
        <Button variant="danger" onClick={Degrement} >-</Button>
    </div>
  )
}

export default Counter