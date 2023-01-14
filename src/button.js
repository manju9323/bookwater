import React, { useState } from 'react'



const Button = () => {
    const [value,setvalue]=useState(0)
    var inc=()=>{
       let a = value+5
       if( a <= 20)
       {
        setvalue(a)
       }

    }
    var dec=()=>{
        let aa=value-3
        if(aa >=0)
        {
            setvalue(aa)
        }
    }


    
  return (
    <>
    <div>task 1</div> 
    <div>{value}</div>
    <button onClick={inc}>
        +
    </button>
    <button onClick={dec}>
        -
    </button>
    
    </>

  )
}

export default Button