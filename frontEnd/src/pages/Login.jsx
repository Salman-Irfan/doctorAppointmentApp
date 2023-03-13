import React from "react";
import { Form, Input } from "antd";
import "../css/login.css";
import { Link } from "react-router-dom";

const Login = () => {
    // form handler
    const onFinishHandler = (values) => {
        console.log(values);
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
