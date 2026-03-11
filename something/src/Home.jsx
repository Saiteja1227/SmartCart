import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import Delete from "./Delete"

function Home()
{
    const name=localStorage.getItem("uname")
    const [details,setDetails]=useState("")
    const vDetails = async ()=>
    {
      console.log("hii")
    const res=await axios.get(`http://localhost:8080/view?data=${name}`)
     console.log(res)
     setDetails(res.data)

    }
   return(
    <>
        <h1>you are at Home...</h1>
        <button onClick={vDetails}>view details</button>
        <p>{details.username}</p>
        <p>{details.email}</p>
        <p>{details.password}</p>
        <Link to="/vAll">View All</Link><br/>
        <Link to="/del" >Delete</Link>
        <Link to="/upd" >Update</Link>
    </>
   )
}
export default Home