import React from 'react';
// import toggleDarkMode from "./components/modeSwitch";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-light">
    <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="images/darklogo.png" class="uil uil-user" alt="" width="125px"/>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a href="#about" class="nav-link"><span data-hover="About">About</span></a>
                </li>
                <li class="nav-item">
                    <a href="#project" class="nav-link"><span data-hover="Projects">Projects</span></a>
                </li>
                <li class="nav-item">
                    <a href="#resume" class="nav-link"><span data-hover="Resume">Resume</span></a>
                </li>
                <li class="nav-item">
                    <a href="https://www.github.com/itsviv0" class="nav-link"><span data-hover="GitHub">GitHub</span></a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link"><span data-hover="Contact">Contact</span></a>
                </li>
            </ul>

            <ul class="navbar-nav ml-lg-auto">
                <div class="ml-lg-4">
                  <div class="color-mode d-lg-flex justify-content-center align-items-center">
                    <i class="color-mode-icon"></i>
                  </div>
                </div>
            </ul>
        </div>
    </div>
  </nav>
  );
}

export default Navbar;
