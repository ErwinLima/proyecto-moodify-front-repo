import React from "react";
import MyTextField from "../components/common/input/MyTextField.js";
import "./styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import MyButton from "../components/common/Button/MyButton.js";
import MyLink from "../components/common/Link/MyLink.js";

const Login = () => {
  return (
    <div className="login-box">
      <div className="user-icon">
        <FontAwesomeIcon
          icon={faCircleUser}
          size="lg"
          style={{ color: "#9D9D9D" }}
        />
      </div>
      <div className="form">
        <MyTextField labelText="Usuario"></MyTextField>

        <MyTextField labelText="Contraseña"></MyTextField>

        <MyButton text="Iniciar sesión"></MyButton>
      </div>
      <MyLink
        text="¿No tienes una cuenta?"
        linkText="Crear cuenta"
        to="/create-account"
      ></MyLink>
    </div>
  );
};

export default Login;
