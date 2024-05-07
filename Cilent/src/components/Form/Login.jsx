import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <form className="sing-in">
      <h1>Login with credintials</h1>
      <div className="box">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <p>
          If you are not register <Link to="/registration">sign up</Link> ⬇️
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
