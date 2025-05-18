import React, { useState } from "react";
import MyTextField from "../components/common/input/MyTextField.js";
import "./styles/createAccount.css";
import MyButton from "../components/common/Button/MyButton.js";
import MyLink from "../components/common/Link/MyLink.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    user: "",
    password: "",
    confirmPassword: "",
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
      return alert("Las contraseñas no coinciden");
    }

    try {
      console.log("Antes de consulta");

      let response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/signup`,
        {
          name,
          lastname,
          birthdate,
          user,
          password,
        });

      console.log(response);
      navigate("/home");
    } catch (error) {
      console.error(
        "Error al crear cuenta:",
        error.response?.data || error.message
      );
      alert("Error al crear cuenta");
    }
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

          <MyButton text="Crear cuenta" onClick={handleCreate}></MyButton>
        </div>
        <MyLink
          text="¿Ya tienes una cuenta?"
          linkText="Iniciar sesión"
          to="/"
        ></MyLink>
      </div>
    </div>
  );
};

export default CreateAccount;
