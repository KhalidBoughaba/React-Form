import { Link, useHistory } from "react-router-dom";
import secondicon from "../image/secondicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";

function Login() {
  const history = useHistory();

  let user = {
    email: "",
    password: "",
  };
  const [val, setVal] = useState(user);

  const hundleCh = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  let subm = (e) => {
    e.preventDefault();
    let v = false;
    axios.get("http://localhost:500/users").then((user) => {
      for (let i = 0; i < user.data.length; i++) {
        if (
          user.data[i].email == val.email &&
          user.data[i].password == val.password
        ) {
          history.replace("/Home");
        }
      }
    });
  };

  return (
    <div class="container mt-5">
      <div class="row">
        <div className="col mt-5">
          <div class="header w-50">
            <h2>Log in</h2>
          </div>
          <form onSubmit={subm} className="login-email w-50">
            <div class="col form-group mt-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                onChange={hundleCh}
              />
            </div>
            <div class="col form-group mt-3">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={hundleCh}
              />
            </div>
            <div class="col form-group mt-3">
              <button
                className="btn btn-outline-block btn-primary mb-5"
                type="submit"
                name="submit"
              >
                login
              </button>
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/Signup">
                {" "}
                <a>Register Here</a>
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
