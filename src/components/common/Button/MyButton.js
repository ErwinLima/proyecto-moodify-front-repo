import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ text, onClick, type = "button" }) => {
  return (
    <Button
      variant="contained"
      color="#299C52"
      onClick={onClick}
      type={type}
      sx={{
        backgroundColor: "#299C52",
        ":hover": { backgroundColor: "#1F7A41" },
        padding: "12px 24px",
        fontWeight: 600,
        color: "#ffffff",
      }}
    >
      {text}
    </Button>
  );
};

export default MyButton;
