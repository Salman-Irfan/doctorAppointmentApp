import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/sendPasswordResetEmail.css";
import axios from "axios";

const SendPasswordResetEmail = () => {
    const [user, setUser] = useState({
        email: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        const { name, email, password, reEnterPassword, } = user;
        if (name && email && password && password === reEnterPassword) {
            axios
                .post("http://localhost:4000/register", user)
                .then((res) => alert("user registered"));
            setUser({
                email: "",
            });
            navigate("/");
        } else {
            alert("invalid");
        }
    };

    return (
        <form onSubmit={handleResetPassword}>
            <div className="register">
                <h3> Reset Password </h3>
                <br />
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Your Email"
                    onChange={handleChange}></input>
                
                <button className="button" type="submit">
                    Send
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

export default SendPasswordResetEmail;
