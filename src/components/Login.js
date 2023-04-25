import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  //allows us to programatically change url
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email:"",
    password:""
  });
  const [error, setError] = useState("");
  const [loginButtonDisable, setLoginButtonDisable] = useState(false);
  const handleSubmission = (e) => {
    e.preventDefault();
        if (!values.email || !values.password) {
          setError("Fill all the feilds");
          return;
        }
    setLoginButtonDisable(true);
    signInWithEmailAndPassword(auth, values.password, values.email)
      .then(async (res) => {
        setLoginButtonDisable(false);
        navigate("/");
      })
      .catch((error) => {
        setLoginButtonDisable(false);
        setError(error.message);
      });
  };
  
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={values.email}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <h5>Password</h5>
          <input
            type="password"
            value={values.password}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <span className="login__error">{error}</span>
          <button
            className="login__signInButton"
            onClick={handleSubmission}
            disabled={loginButtonDisable}
          >
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon Clone's Conditions of Use and
            Privacy Notice.
          </p>
          <Link to="/signup">
            <button className="login__registerButton">
              Create your Amazon Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
