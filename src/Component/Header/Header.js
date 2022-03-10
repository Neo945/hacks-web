import * as React from "react";

export default function Header(){
  return (
    <nav>
      <div class="nav-wrapper black light">
        <a href="/" class="brand-logo" style={{marginLeft: '20px', textDecoration: "none"}}>
          IB
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li style={{marginRight: '20px'}}>
            <a href="/login" style={{textDecoration: "none"}}>Log In</a>
          </li>
          <li>
            <a href="/register" style={{textDecoration: "none"}}>Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
