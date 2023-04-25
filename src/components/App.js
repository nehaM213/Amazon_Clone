import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useStateValue } from "../contexts/StateProvider";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch({
          type:'SET_USER',
          user:user
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
