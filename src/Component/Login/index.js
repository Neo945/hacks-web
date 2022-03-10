import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./styles.css";
import isEmail from "validator/lib/isEmail";
import lookup from "../fetchData/lookup";
import loginImg from "./login.svg";

function Login() {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const history = useNavigate();
  return (
    <div
    className="bg-light"
      style={{
        background: "rgba(0,0,0,0.85)",
        height: "93.4vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 10%",
      }}
    >
      <div
        className="row"
        style={{
          width: "40%",
          margin: "auto",
          minWidth: "400px",
          maxWidth: "600px",
        }}
      >
        <div className="col s12 ">
          <div className="card">
            <div className="card-action  lighten-1 white-text">
              <h3 style={{ color: "rgba(0,0,0,0.6)" }}>Login Form</h3>
            </div>
            <form className="card-content"onSubmit={async (event) => {
                event.preventDefault();
                if (state.email && state.password) {
                  if (!isEmail(state.email)) {
                    // setError({ ...error, email: true });
                    return;
                  }
                  const response = await lookup("POST", JSON.stringify(state), "/auth/login", {
                    "Content-type": "application/json",
                  });
                  if (response[1] === 201) {
                    localStorage.setItem("user", JSON.stringify(response[0].user));
                    window.location.href = "/";
                  } else {
                    localStorage.setItem("user", null);
                    // setError({ email: true, password: true });
                    alert(response[0].message);
                  }
                } else {
                  if (!state.email) {
                    // setError({ ...error, email: true });
                  }
                  if (!state.password) {
                    // setError({ ...error, password: true });
                  }
                }
              }}
              >
              <div className="form-field">
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={state.email}
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />
              </div>
              <br />

              <div className="form-field">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={state.password}
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                />
              </div>
              <br />
              <br />
              <div className="form-field">
                <button
                  className="btn-large waves-effect waves-dark blue"
                  style={{ width: "100%" }}
                  type="submit"
                >
                  Login
                </button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", width: "50%" }}>
        <img
          className="loginPic_keyFrame"
          src={loginImg}
          alt=""
          style={{ width: "80%", aspectRatio: "1", transform: "scale(1.4)" }}
        />
      </div>
    </div>
  );
}

export default Login;
