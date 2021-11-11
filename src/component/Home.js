import React from "react";

function Home() {
  return (
    <main>
      <nav class="navbar navbar-expand-lg navbar-light topnav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            React Form
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item ">
                <a href="/" className="nav-link bg-white rounded">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Home;
