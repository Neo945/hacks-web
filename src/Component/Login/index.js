import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./styles.css";
import isEmail from "validator/lib/isEmail";
import lookup from "../fetchData/lookup";


function Login() {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const history = useNavigate();
  return (
    <div className="row" style={{display: "block"}}>
      <div className="col s12 m4 offset-m4">
        <div className="card">
          <form onSubmit={async (event) => {
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
          }}>
            <div className="card-action teal lighten-1 white-text">
              Login
            </div>
            <div className="card-content">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="validate" onChange={(event) => setState({ ...state, email: event.target.value })}></input>
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input type="password" className="validate" id="password" onChange={(event) => setState({ ...state, password: event.target.value })}></input>
              </div><br/>
              <div className="form-field center-align">
                <button type="submit" className="btn-large waves-effect waves-dark" style={{ width: "30%"}}>Submit</button>
              </div>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
