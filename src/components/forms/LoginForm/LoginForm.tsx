import React from "react";
import { EmailInput } from "../inputs/EmailInput/EmailInput";
import { PasswordInput } from "../inputs/PasswordInput/PasswordInput";
import { OutlinedButton } from "../buttons/OutlinedButton/OutlinedButton";
import { FilledButton } from "../buttons/FilledButton/FilledButton";
import './LoginForm.scss'

interface LoginFormProps {
  logIn: () => void;
}

const LoginForm = ({logIn}: LoginFormProps) => {
  return (
    <div className="formContainer">
      <form>
      <h1>Log in</h1>
        <div className="inputsContainer">
          <EmailInput>User Id*</EmailInput>
          <PasswordInput />
        </div>
        <div className="buttonsContainer">
          <OutlinedButton>Reset</OutlinedButton>
          <FilledButton onClick={logIn}>Log In</FilledButton>
        </div>
        <p>*Mandatory</p>
      </form>
    </div>
  );
};

export default LoginForm