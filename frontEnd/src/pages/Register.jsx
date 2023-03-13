import React from "react";
import { Form, Input, message } from "antd";
import "../css/register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate()
    // form handler
    const onFinishHandler = async (values) => {
        try {
            const res = await axios.post('http://127.0.0.1:4000/api/v1/user/register', values)
            if(res.data.success) {
                message.success(`Registered successfully`)
                alert('Registered successfully')
                navigate('/login')
            }else{
                message.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            message.error(error.message)
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
                    <h3 className="text-center">Register Form</h3>
                    <Form.Item>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                    </Form.Item>
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
                    <Link className="m-2" to="/login">
                        Already a user Login Here
                    </Link>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={onButtonClickHandler}>
                        Register
                    </button>
                </Form>
            </div>
        </>
    );
};

export default Register;
