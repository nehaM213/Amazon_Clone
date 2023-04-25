import React, { useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Signup() {
  //allows us to programatically change url
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name:"",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [registerButtonDisable, setRegisterButtonDisable] = useState(false);
  const handleSubmission = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.password) {
      setError("Fill all the feilds");
      return;
    }
    setRegisterButtonDisable(true);
    createUserWithEmailAndPassword(auth , values.email , values.password)
      .then(async(res) => {
        setRegisterButtonDisable(false);
        if (res) {
            const user=res.user;
            //bcus updateprofile returns a promise we use await
            await updateProfile(user,{displayName:values.name});
          navigate("/");
        }
        console.log(res);
      })
      .catch((err) => {
        setRegisterButtonDisable(false);
        console.log("Error-", err.message);
        setError(err.message);
      });
  };
  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="signup__container">
        <h1>Create Account</h1>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={values.name}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, name: e.target.value }))
            }
          />

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

          <p>
            By creating an account you agree to AMAZON CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads
          </p>
          <span className="signup__error">{error}</span>
          <button
            className="signup__signupButton"
            onClick={handleSubmission}
            disabled={registerButtonDisable}
          >
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/Login" className="signup__link">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
