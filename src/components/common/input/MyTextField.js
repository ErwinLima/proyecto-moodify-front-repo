import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./MyTextField.module.css";

const MyTextField = ({ labelText, type = "text" }) => {
  return (
    <div className={styles.input}>
      <label>{labelText}</label>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        color="success"
        size="small"
        type={type}
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
