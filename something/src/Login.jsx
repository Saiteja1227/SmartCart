import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login()
{
  const nav=useNavigate()
  const [data,setdata]=useState(
    {
      username:"",//ch
      password:""//k
    }
  )
  
  

  const change = (e)=>
  {
     setdata({...data,[e.target.name]:e.target.value})
  }

  const submit = async ()=>
  {
      console.log("before api")
      const res= await axios.post("http://localhost:8080/login",data)
      console.log("after api")
      console.log(res)
      console.log(res.data)
      alert(res.data)
      if(res.data == "Login successful")
      {
         localStorage.setItem("uname",data.username)
         localStorage.setItem("upsw",data.password)
        nav("/h")
        console.log("hhhh")
      }
      else
      {
        nav("/log")
      }
  }


  return(
    <>
    <h2>welcome to Login page</h2>
     <input onChange={change} name="username" placeholder="create username"/><br/>
     <input onChange={change} name="password" placeholder="create password"/><br/>
     <button onClick={submit} >Login</button>

     {/* {message && } */}
    </>
  )
}

export default Login

