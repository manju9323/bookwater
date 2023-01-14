import axios from 'axios'
import React, { useState } from 'react'


const Pincode = () => {
    const [val,setval]=useState("")
    const[gg,setgg]=useState([1,2,3,44,56])
    const [post,setpost]=useState([])
   // const [bb,setbb]=useState([{"name":"manju","school":"good"},{"name":"gopi","school":"cms"}])
    
   const submit =async()=>{
    try{
    var a= await axios.get(`https://api.postalpincode.in/pincode/${val}`)
        setpost(a.data[0].PostOffice)
    }
    catch(err){
      console.log("err")
    }
  }
  console.log(post)


  return (
    <div>
      <div>Task2</div>
        <input type="text"  onChange={(e)=>{setval(e.target.value)}}/>
        <button onClick={submit}>Submit</button>
       {post &&  <table>
        <tr>
          <th>name</th>
          <th>circle</th>
        </tr>
          {post.map((m,i) => { return(
              <tr className=''>
              <td>{m.Name}</td>
              <td>{m.Circle}</td>
              </tr>
            )

           })}
        </table>}
      


    </div>
  )
}

export default Pincode