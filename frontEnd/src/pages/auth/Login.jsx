import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/login.css";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleLogin = (e) => { // Pass the event as an argument to the function
        e.preventDefault(); // Prevent the default form submission behavior
        axios
            .post("http://localhost:4000/login", user)
            .then((res) => {
                if (res.data.message) {
                    alert(res.data.message);
                        setUser({
                            email: "",
                            password: "",
                        });
                        navigate('/');
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Error logging in");
            });
    };

    return (
        <form onSubmit={handleLogin}>
        <div className="login">
            <h1> Login </h1>
            <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Enter your Email"
                onChange={handleChange}></input>
            <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Enter your Password"
                onChange={handleChange}></input>
            <button className="button" type="submit"> Login </button>
            <br />
            <Link to="/auth/sendpasswordresetemail">Forgot Password</Link>
            <div> or </div>
            <br />
            <Link className="button" aria-current="page" to="/auth/register"> Register </Link>
        </div>
        </form>
    );
};

export default Login;
