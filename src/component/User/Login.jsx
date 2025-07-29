import React from "react";
import './css/login.css';
import { FaUser, FaLock } from "react-icons/fa";
import Photo from '../Image/background.avif'

const Login = () => {
  return (
    <>
      <div className="col-12 login">
        <div className="col-12 wrapper">
              <form action="">
                <h3>Login</h3>
                <div className="input-box mt-2 pl-2">
                  <input type="text" placeholder="User Name" required />
                  <FaUser className="icon"/>
                </div>
                <div className="input-box mt-2 pl-2">
                <input type="password" placeholder="Password" required />
                <FaLock  className="icon"/>
                </div>
                <div className="remember-forget mt-2">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forget password</a>
                </div>
                <div className="btn mt-2">
                    <button type="button" className="btn btn-primary">Login</button>
                </div>
                <div className="register mt-2">
                <p>Don't have an account?<a href="#">Register</a></p>
                </div>
              </form>
            </div>
      </div>
    </>
  );
};

export default Login;
