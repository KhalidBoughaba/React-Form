import React from "react";
import lp1 from "../image/lp1.jpg";
import lp2 from "../image/lp2.jpg";
import lp3 from "../image/lp3.jpg";
import wel from "../image/wel.jpg";

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
      <section className="container">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={wel} class="d-block w-100 h-50" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome</h5>
              <p>Welcome to Secound Project.</p>
            </div>
          </div>
        </div>
      </section>
      <aside className="container d-flex justify-content-between">
        <article>
          <div
            class="card text-white bg-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card text-white bg-secondary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Secondary card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card text-white bg-success mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Success card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card text-white bg-danger mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Danger card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card text-dark bg-warning mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Warning card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card text-dark bg-info mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Info card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card text-dark bg-light mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card text-white bg-dark mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Dark card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </article>
        <article className="w-75 ms-5">
          <div class="card mb-3">
            <img src={lp3} class="card-img-top p-3 rounded" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-black">Card title</h5>
              <p class="card-text text-black">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-black">Card title</h5>
              <p class="card-text text-black">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <img src={lp2} class="card-img-bottom p-3 rounded" alt="..." />
          </div>
        </article>
      </aside>
    </main>
  );
}

export default Home;
