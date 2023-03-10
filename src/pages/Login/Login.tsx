import React from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../../components/forms/LoginForm/LoginForm";
import { Logo } from "../../components/Logo/Logo";
import "./Login.scss";

export const Login = () => {
  const navigate = useNavigate();
  const logInHandler = () => {
    navigate("/movies");
  }
  
  return (
    <div className="login-page">
        <LoginForm logIn={logInHandler}></LoginForm>
        <Logo />
    </div>
  );
};

