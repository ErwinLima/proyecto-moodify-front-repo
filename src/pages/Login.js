import MyTextField from "../components/common/input/MyTextField.js";
import "./styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import MyButton from "../components/common/Button/MyButton.js";
import MyLink from "../components/common/Link/MyLink.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        {
          user,
          password,
        }
      );

      // Guardar tokens
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      navigate("/home");
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Credenciales inválidas",
        severity: "error",
      });
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

      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ zIndex: 2000, mb: -10 }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
