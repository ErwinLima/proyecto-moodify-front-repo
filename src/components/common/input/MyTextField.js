import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./MyTextField.module.css";

const MyTextField = ({
  labelText,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <div className={styles.input}>
      {labelText && <label className={styles.labelText}>{labelText}</label>}
      <TextField
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        color="success"
        size={labelText ? "small" : "normal"}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#408358",
            },
            "&:hover fieldset": {
              borderColor: "#5ca460",
            },
          },
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#5ca460",
          },
        }}
      />
    </div>
  );
};

export default MyTextField;
