import React, { useState } from "react";
import MyTextField from "../components/common/input/MyTextField.js";
import "./styles/createAccount.css";
import MyButton from "../components/common/Button/MyButton.js";
import MyLink from "../components/common/Link/MyLink.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CreateAccount = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    user: "",
    password: "",
    confirmPassword: "",
  });

  const [creating, setCreating] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // 'success' | 'error'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    console.log("Entro");
    const { name, lastname, birthdate, user, password, confirmPassword } = form;
    console.log(form);

    if (password !== confirmPassword) {
      return setSnackbar({
        open: true,
        message: "Las contraseñas no coinciden",
        severity: "error",
      });
    }

    try {
      console.log("Antes de consulta");

      await axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, {
        name,
        lastname,
        birthdate,
        user,
        password,
      });

      setSnackbar({
        open: true,
        message: "¡Cuenta creada exitosamente!",
        severity: "success",
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error al crear cuenta",
        severity: "error",
      });
    } finally {
      setCreating(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div>
      <div className="login-box">
        <h1 className="title">Crea tu cuenta</h1>
        <div className="form">
          <div className="input-group">
            <MyTextField
              labelText="Nombre"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <MyTextField
              labelText="Apellido"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
            />
            <MyTextField
              labelText="Fecha de nacimiento"
              name="birthdate"
              type="date"
              value={form.birthdate}
              onChange={handleChange}
            />
            <MyTextField
              labelText="Usuario"
              name="user"
              value={form.user}
              onChange={handleChange}
            />
            <MyTextField
              labelText="Contraseña"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
            <MyTextField
              labelText="Confirmar contraseña"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <MyButton
            text={creating ? "Creando..." : "Crear cuenta"}
            onClick={handleCreate}
            disabled={creating}
          />
        </div>
        <MyLink
          text="¿Ya tienes una cuenta?"
          linkText="Iniciar sesión"
          to="/"
        ></MyLink>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleCloseSnackbar}
        sx={{ zIndex: 2000 }}
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

export default CreateAccount;
