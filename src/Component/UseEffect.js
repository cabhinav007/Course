import React, { useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';

const Counter = () => {
    const [count,setcount]=useState(0)
    const Increament=()=>{
        setcount(count+1)
    }
    const Degrement=()=>{
        setcount(count-1)
    }
    useEffect(()=>{
        console.log("hello hai ")
    },[Increament])
  return (
    <div>
        <h2>The Countes : {count} </h2>
        <Button  variant="success" onClick={Increament}>+</Button>
        <Button variant="danger" onClick={Degrement} >-</Button>
    </div>
  )
}

export default Counter
// it is an controlling effect 