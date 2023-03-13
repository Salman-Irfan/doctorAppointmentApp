import React from "react";
import { Form, Input, message } from "antd";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const onFinishHandler = async (values) => {
        try {
            const response = await fetch(
                "http://127.0.0.1:4000/api/v1/user/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                }
            );
            const data = await response.json();

            if (data.success) {
                localStorage.setItem("token", data.token);
                navigate("/dashboard");
                message.success("Login successfully");
                navigate("/");
            } else {
                message.error(data.message);
            }
        } catch (error) {
            console.log(error);
            message.error(error.message);
        }
    };

    const onButtonClickHandler = (event) => {
        event.preventDefault();
        const form = event.target.form;
        const formData = new FormData(form);
        const values = Object.fromEntries(formData.entries());
        onFinishHandler(values);
    };

    return (
        <>
            <div className="form-container">
                <Form className="register-form" layout="vertical">
                    <h3 className="text-center">Login Form</h3>
                    <Form.Item>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Item>
                    <Link className="m-2" to="/register">
                        Don't have an account Register Here
                    </Link>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={onButtonClickHandler}>
                        Login
                    </button>
                </Form>
            </div>
        </>
    );
};

export default Login;
