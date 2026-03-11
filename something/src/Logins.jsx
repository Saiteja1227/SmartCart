
import { useState } from "react"
import axios from "axios";
function Logins()
{
   const [data,setdata]=useState(
    {
       username:"",
       password:""
    }
  )
  const change = (e)=>
  {
    setdata({...data,[e.target.name]:e.target.value})
  }

  const submit = ()=>
  {
    const res=axios.post("http://localhost:8080/login",data)
    console.log(res)
  }


  return(
    <>
    <h2>lets login...</h2>
    <h2>my name is {data.username}</h2>
    <h2>my password is {data.psw}</h2>
     <input onChange={change} name="username" placeholder="create username"/><br/>
     <input onChange={change} name="password" placeholder="create password"/><br/>
     <button onClick={submit} >Login</button>
    </>
  )
}
export default Logins