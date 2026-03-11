import { useState } from "react"
import axios from "axios";
function Update()
{
  const [data,setdata]=useState(
    {
      username:"",//ch
      oldPassword:"",//k
      newPassword:""
    }
  )
  data.username=localStorage.getItem("uname")
  data.oldPassword=localStorage.getItem("upsw")
  const change = (e)=>
  {
     setdata({...data,[e.target.name]:e.target.value})
  }

  const submit = async ()=>
  {
      console.log("before api")
      const res= await axios.post("http://localhost:8080/update",data)
      console.log("after api")
      console.log(res)
      console.log(res.data)
  }


  return(
    <>
    <h2>welcome to Login page</h2>
     <input onChange={change} name="newPassword" placeholder="enter new  password"/><br/>
     <button onClick={submit} >update</button>
    </>
  )
}

export default Update

