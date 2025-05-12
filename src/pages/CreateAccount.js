import React from "react";
import MyTextField from "../components/common/input/MyTextField.js";
import "./styles/createAccount.css";
import MyButton from "../components/common/Button/MyButton.js";
import MyLink from "../components/common/Link/MyLink.js";

const CreateAccount = () => {
  return (
    <div>
      <div className="login-box">
        <h1 className="title">Crea tu cuenta</h1>
        <div className="form">
          <div className="input-group">
            <MyTextField labelText="Nombre"></MyTextField>
            <MyTextField labelText="Apellido"></MyTextField>
            <MyTextField
              labelText="Fecha de nacimiento"
              type="date"
            ></MyTextField>
            <MyTextField labelText="Usuario"></MyTextField>
            <MyTextField labelText="Contraseña" type="password"></MyTextField>
            <MyTextField
              labelText="Confirmar contraseña"
              type="password"
            ></MyTextField>
          </div>

          <MyButton text="Crear cuenta"></MyButton>
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
