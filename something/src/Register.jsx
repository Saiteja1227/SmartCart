import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register()
{
  const nav=useNavigate()
  const [data,setData]=useState(
    {
      username:"",
      email:"",
      password:""
    }
  )

  const changeName = (e)=>
  {
    setData({...data,[e.target.name]:e.target.value})
  }

  const regSubmit = async () =>
  {
   try
   {
     const res= await axios.post("http://localhost:8080/register",data)
    console.log(res)
    alert(res.data)
    nav("/log")
   }
   catch(xyz)
   {
         console.log(xyz)
         console.log(xyz.response.data)
         alert(xyz.response.data)
         nav("/reg")
   }

  }


  return(
    <>
       <div className="container mt-4" style={{maxWidth:"400px"}}>
         <h4 className="text-center text-primary mb-3">iam Register....</h4>

         <p className="text-center">
           my name is {data.uname}
         </p>

         <input
           name="username"
           onChange={changeName}
           placeholder="enter username"
           className="form-control mb-2"
         />

         <input
           name="email"
           onChange={changeName}
           placeholder="enter email"
           className="form-control mb-2"
         />

         <input
           name="password"
           onChange={changeName}
           placeholder="enter password"
           className="form-control mb-3"
         />

         <button
           onClick={regSubmit}
           className="btn btn-success w-100"
         >
           register
         </button>
       </div>
    </>
  )
}
export default Register












// import { useState } from "react"
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// function Register()
// {
//   const nav=useNavigate()

//   const [data,setdata]=useState(
//     {
//        username:"",
//        email:"",
//        psw:""
//     }
//   )
//   const change = (e)=>
//   {
//     setdata({...data,[e.target.name]:e.target.value})
//   }

//   const submit = async ()=>
//   {
//     const res=await axios.post("http://localhost:8080/register",data)
//     console.log(res)
//     console.log(res.data)
//     alert(res.data)
//     nav("/log")
//   }


//   return(
//     <>
//     <h2>my name is {data.username}</h2>
//     <h2>my email is {data.email}</h2>
//     <h2>my password is {data.psw}</h2>
//      <input onChange={change} name="username" placeholder="create username"/><br/>
//      <input onChange={change} name="email" placeholder="enter email"/><br/>
//      <input onChange={change} name="psw" placeholder="create password"/><br/>
//      <button onClick={submit} >Register</button>
//     </>
//   )
// }
// export default Register