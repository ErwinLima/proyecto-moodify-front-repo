import MyTextField from "../components/common/input/MyTextField.js";
import "./styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import MyButton from "../components/common/Button/MyButton.js";
import MyLink from "../components/common/Link/MyLink.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        {
          user,
          password,
        });

      // Guardar tokens
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      navigate("/home");
    } catch (error) {
      console.error("Error en login:", error.response?.data || error.message);
      alert("Credenciales inválidas");
    }
  };

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
        <MyTextField
          labelText="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <MyTextField
          labelText="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyButton text="Iniciar sesión" onClick={handleLogin} />
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
