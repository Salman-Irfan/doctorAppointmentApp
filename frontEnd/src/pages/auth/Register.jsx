import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/register.css";
import axios from "axios";


const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const { name, email, password, reEnterPassword, } = user;
        if (name && email && password && password === reEnterPassword) {
            axios
                .post("http://localhost:4000/register", user)
                .then((res) => alert("user registered"));
            setUser({
                name: "",
                email: "",
                password: "",
                reEnterPassword: "",
            });
            navigate("/");
        } else {
            alert("invalid");
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div className="register">
                <h1> Register </h1>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Your Name"
                    onChange={handleChange}></input>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Your Email"
                    onChange={handleChange}></input>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="Your Password"
                    onChange={handleChange}></input>
                <input
                    type="password"
                    name="reEnterPassword"
                    value={user.reEnterPassword}
                    placeholder="Re-enter Password"
                    onChange={handleChange}></input>    

                <button className="button" type="submit">
                    Register
                </button>
                <div> or </div>
                <br />
                <Link className="button" aria-current="page" to="/auth/login">
                    Login
                </Link>
            </div>
        </form>
    );
};
export default Register;