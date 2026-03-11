import { useState } from "react";
import axios from "axios";

function View() 
{

  const [message, setMessage] = useState("");
  const [vall, setvall] = useState([]);
  const [data, setdata] = useState("");

  // ✅ pagination state
  const [page, setPage] = useState(0);
  const size = 3;   // records per page

  const change = (e) => {
    setdata(e.target.value);
  };

  const submit = async () => {
    const res = await axios.get(`http://localhost:8080/view?data=${data}`);
    setMessage(res.data);
  };

  // ✅ paginated fetch
  const fetchUsers = async (pageNo) => {
    const res = await axios.get(
      `http://localhost:8080/viewAll?page=${pageNo}&size=${size}`
    );
    console.log(res)
    setvall(res.data);
  };

  const nextPage = () => {
    const next = page + 1;
    setPage(next);
    fetchUsers(next);
  };

  const prevPage = () => {
    if (page === 0) return;
    const prev = page - 1;
    setPage(prev);
    fetchUsers(prev);
  };

  const allSubmit = () => 
  {
    setPage(0);
    fetchUsers(0);
  };

  return (
    <>
      <h2>welcome to details page</h2>

      <input
        onChange={change}
        placeholder="enter username to get details"
      />
      <br />

      <button onClick={submit}>get details</button>


      <button onClick={allSubmit}>view all</button>

      {/* single user */}
      {message && (
        <>
          <p>username: {message.username}</p>
          <p>email: {message.email}</p>
          <p>password: {message.password}</p>
        </>
      )}

      {/* paginated users */}
      {vall.length > 0 && (
        <div>
          <h3>All Users (Page {page + 1})</h3>

          {vall.map((u, index) => (
            <div key={index}>
              <p>Username: {u.username}</p>
              <p>Email: {u.email}</p>
              <hr />
            </div>
          ))}

          <button onClick={prevPage} disabled={page === 0}>
            Prev
          </button>

          <button onClick={nextPage}>
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default View;
























// import { useState } from "react"
// import axios from "axios";

// function View()
// {
//   const [message,setMessage]  = useState("")

//   const [vall,setvall]  = useState([])

//   const [data,setdata]=useState()

//   const change = (e)=>
//   {
//     setdata(e.target.value)
//   }


//   const submit = async ()=>
//   {
//       console.log("before api")
//       const res= await axios.get(`http://localhost:8080/view?data=${data}`)
//       console.log("after api")
//       console.log(res)
//       console.log(res.data) 
//       setMessage(res.data);
//   }

//   const allSubmit = async () =>
//   {
    
//       console.log("before api")
//       const res= await axios.get("http://localhost:8080/viewAll")
//       console.log("after api")
//       console.log(res)
//       console.log(res.data)
//       setvall(res.data);
//   }

//   return(
//     <>
//     <h2>welcome to details page</h2>
//     <h1>{data}</h1>
//      <input onChange={change} name="username" placeholder="enter username to get details"/><br/>
//      <button onClick={submit} >get details</button>

//      <button onClick={allSubmit}>view all</button>


// {message && (<> <p>username:{message.username}</p> <p>email:{message.email}</p> <p>password:{message.password}</p> </> ) }


//     {vall.length > 0 && (
//                 <div>
//                        <h3>All Users</h3>

//                        {vall.map((u) => 
//                        (
//                          <div>
//                                <p>Username: {u.username}</p>
//                                <p>Email: {u.email}</p>
//                          </div>
//                          ))}
//                 </div>
// )}

    
//     </>
//   )
// }

// export default View

