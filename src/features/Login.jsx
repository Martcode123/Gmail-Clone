import { alertClasses, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase"
import "./Login.css";
import { login } from "./userSlice";

function Login() {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch
            (login({
               displayName: user.displayName,
               email: user.email,
               photoURL: user.photoURL
            }))
        })
        .catch((error) => alertClasses(error.message))
    }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
