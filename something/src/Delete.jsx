import { useState } from "react"
import axios from "axios";
function Delete()
{
  const [data,setdata]=useState(
    {
      username:"",//ch
      Password:"",//k
    }
  )
  data.username=localStorage.getItem("uname")
  data.Password=localStorage.getItem("upsw")
  const change = (e)=>
  {
     setdata({...data,[e.target.name]:e.target.value})
  }


  const submit = async ()=>
  {
      console.log("before api")
      const res= await axios.post("http://localhost:8080/delete",data)
      console.log("after api")
      console.log(res)
      console.log(res.data)
  }


  return(
    <>
    <h2>welcome to Delete page</h2>
     <button onClick={submit} >delete Your account</button>
    </>
  )
}

export default Delete

