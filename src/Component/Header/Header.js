import * as React from "react";

export default function Header(){
  return (
    <nav>
      <div class="nav-wrapper black light">
        <a href="/" class="brand-logo" style={{marginLeft: '20px'}}>
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li style={{marginRight: '20px'}}>
            <a href="/login">Log In</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
