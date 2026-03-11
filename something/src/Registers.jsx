
import { useState } from "react"
import axios from "axios";
function Registers()
{ const [data,setdata]=useState(
    {
       username:"",
       email:"",
       psw:""
    }
  )
  const change = (e)=>
  {
    setdata({...data,[e.target.name]:e.target.value})
  }

  const submit = ()=>
  {
    const res=axios.post("http://localhost:8080/reg",data)
    console.log(res)
  }


  return(
    <>
    <h2>lets register...</h2>
    <h2>my name is {data.username}</h2>
    <h2>my email is {data.email}</h2>
    <h2>my password is {data.psw}</h2>
     <input onChange={change} name="username" placeholder="create username"/><br/>
     <input onChange={change} name="email" placeholder="enter email"/><br/>
     <input onChange={change} name="psw" placeholder="create password"/><br/>
     <button onClick={submit} >Register</button>
    </>
  )
}
export default Registers