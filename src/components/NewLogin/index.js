import React from "react";
// import TitleComponent from "../../TitleComponent";
// import LoginForm from "./LoginForm";
import LoginForm from "./LoginnewForm";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.loginWrapper}>
        <div className={styles.loginBody}>
          <p className={styles.Loginpar}> Login</p>
          <LoginForm/>
          <p className={styles.dont}>Don't Have an account ? <span className={styles.signUpSpan}>Sign Up</span></p>
        </div>
      </div>
    </>
  );
};

export default Login;