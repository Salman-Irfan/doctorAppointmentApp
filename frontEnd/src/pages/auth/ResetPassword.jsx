import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/resetPassword.css";
import axios from "axios";

const ResetPassword = () => {
    const [user, setUser] = useState({
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

    const handleResetPassword = (e) => {
        e.preventDefault();
        const { password, reEnterPassword, } = user;
        if ( password && password === reEnterPassword) {
            axios
                .post("http://localhost:4000/register", user)
                .then((res) => alert("user registered"));
            setUser({
                password: "",
                reEnterPassword: "",
            });
            navigate("/auth/login");
        } else {
            alert("invalid");
        }
    };

    return (
        <form onSubmit={handleResetPassword}>
            <div className="register">
                <h1> Reset Password </h1>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="New Password"
                    onChange={handleChange}></input>
                <input
                    type="password"
                    name="reEnterPassword"
                    value={user.reEnterPassword}
                    placeholder="Confirm New Password"
                    onChange={handleChange}></input>    

                <button className="button" type="submit">
                    Reset
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

export default ResetPassword;
