import React, { useState } from "react";
import '../css/login.css'
import axios from "axios";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";



function LoginA() {

    const [userId, setUserId] = useState('Login');
    const [password, setPassword] = useState('Password');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log('User ID:', userId);
        console.log('Password:', password);

        if (userId === 'admin' && password === '1234') {
            alert('Login successful!');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <div className="col-lg-2 col-md-2 col-sm-12 p-0 m-0">
                    <Sidebar />
                </div>

                {/* Topbar + Login */}
                <div className="col-lg-10 col-md-10 col-sm-12 p-0 m-0">
                    <Topbar />
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
                        <form onSubmit={handleLogin} style={{ maxWidth: "400px", width: "100%", padding: "2rem", border: "2px solid #000000ff", borderRadius: "8px" }}>
                            <h3 className="text-center mb-4">Login</h3>
                            <div className="mb-3">
                                <label>User ID:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};



export default LoginA