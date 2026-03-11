import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// User Pages
import HomePage from './pages/HomePage';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AccountPage from './pages/AccountPage';
import ProfileSettings from './pages/ProfileSettings';
import AddressesPage from './pages/AddressesPage';
import PaymentMethods from './pages/PaymentMethods';
import SecuritySettings from './pages/SecuritySettings';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AddProductPage from './pages/AddProductPage';
import ManageProductsPage from './pages/ManageProductsPage';
import AdminOrdersPage from './pages/AdminOrdersPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/my-orders" element={<MyOrdersPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/account/profile" element={<ProfileSettings />} />
            <Route path="/account/addresses" element={<AddressesPage />} />
            <Route path="/account/payment" element={<PaymentMethods />} />
            <Route path="/account/security" element={<SecuritySettings />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/add-product" element={<AddProductPage />} />
            <Route path="/admin/manage-products" element={<ManageProductsPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;















// import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
// import Registers from "./Registers"
// import Logins from "./Logins"

// function App()
// {
//     return(
//       <>
//           <h3>iam Home...</h3>

//            <BrowserRouter>
//               <Link to="/log">click here to login...</Link><br/>
//               <Link to="/reg">click here to register...</Link>
//                <Routes>
//                    <Route path="/reg" element={<Registers/>} />
//                    <Route path="/log" element={<Logins/>}/>
//                </Routes>
//            </BrowserRouter>
//       </>
//     )
// }
// export default App


















// import { useState } from "react"
// import axios from "axios";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Register from "./Register";
// import Login from "./Login";
// import Update from "./update";
// import Delete from "./Delete";
// import View from "./View";
// function App()
// {
//     return(
//       <>
//          <BrowserRouter>
//            <Routes>
//               <Route path="/reg" element=<Register/>/>
//                <Route path="/log" element=<Login/>/>
//                <Route path="/upd" element=<Update/>/>
//                 <Route path="/del" element=<Delete/>/>
//                 <Route path="/view" element=<View/>/>
//            </Routes>
//          </BrowserRouter>
//       </>
//     )
// }

// export default App  



//------------------------script-1---------------------------------


// 🔴 First: Small mistake in your code (important to mention while teaching)
// <h2>my name is {data.uname}</h2>

// ❌ uname does NOT exist
// ✅ It should be:
// <h2>my name is {data.username}</h2>

// Tell students:

// “React will not guess names. Key must match exactly.”


// 🎯 What students must understand first (1 line)
// 👉 API call takes time
// 👉 JavaScript does NOT wait by default

// 🔹 Case 1: WITHOUT async and await (Confusing Output)
// ❌ Code (WITHOUT async/await)
// const submit = () => {
//   const res = axios.post("http://localhost:8080/reg", data);

//   console.log(res);
//   console.log(res.data);
// };

// 🧠 What JavaScript thinks

// “axios.post() will take time.
// I will NOT wait.
// I will move to next line.”


// 📤 Output in Console (SHOW THIS TO STUDENTS)
// Promise {<pending>}
// undefined

// ❌ Why this happens (very simple words)


// axios.post() returns a Promise


// Promise means “I will give data later”


// JavaScript prints it before data arrives


// 📢 Teaching line:

// “You are asking result before the exam is finished.”


// 🔹 Case 2: WITH async and await (Correct Output)
// ✅ Code (WITH async/await)
// const submit = async () => {
//   const res = await axios.post("http://localhost:8080/reg", data);

//   console.log(res);
//   console.log(res.data);
// };


// 🧠 What JavaScript now understands

// “WAIT here
// until server responds
// THEN go to next line”


// 📤 Output in Console (SHOW THIS)
// {data: "Registration successful", status: 200, ...}
// Registration successful

// ✅ Why this works


// async → allows waiting


// await → pauses the function


// Next line runs only after response comes


// 📢 Teaching line:

// “Now JavaScript waits like a disciplined student.”


// 🔥 BEST WAY TO SHOW DIFFERENCE (Side-by-side)
// ❌ Without await
// console.log("Before API");
// const res = axios.post("http://localhost:8080/reg", data);
// console.log("After API");

// Console Output
// Before API
// After API

// 👉 API still running in background

// ✅ With await
// console.log("Before API");
// const res = await axios.post("http://localhost:8080/reg", data);
// console.log("After API");

// Console Output
// Before API
// After API

// 👉 After API prints only after server responds

// 🎓 One-Line Exam / Interview Explanation

// Without async/await: JavaScript does not wait for API response
// With async/await: JavaScript waits and then uses the data


// 🧠 Ultra-Simple Analogy (Students LOVE this)
// ❌ Without await
// 📞 You call a friend
// 📢 You speak before they answer
// ✅ With await
// 📞 You call
// ⏳ You wait
// 📢 Then you talk

// 🟢 Final Teaching Tip (VERY IMPORTANT)
// Tell students:

// “If you want API data → ALWAYS use
// async + await OR .then()
// Otherwise you’ll get Promise pending”


// If you want, I can:


// Explain same thing using .then()


// Give exam MCQs


// Give 1-minute explanation script


// Explain how Spring Boot receives this data


// Just tell me 👍

// ---------------------backend---------------------

// 1️⃣ Simple Way (Thread.sleep) — ONLY for learning
// ❌ Code (Blocking – BAD in real apps)
// @PostMapping("/reg")
// String m(@RequestBody Users nu) throws InterruptedException {

//     String uname = nu.getUsername();
//     Users eu = this.ur.findByUsername(uname);

//     if (eu == null) {

//         // ⏸ Pause this request thread for 1 minute
//         Thread.sleep(60_000); // 60,000 ms = 1 minute

//         this.ur.save(nu);
//         return "registration done";
//     }

//     return "username already exists";
// }