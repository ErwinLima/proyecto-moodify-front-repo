import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ text }) => {
  return (
    <Button
      variant="contained"
      color="#299C52"
      sx={{
        backgroundColor: "#299C52",
        ":hover": { backgroundColor: "#1F7A41" },
        padding: "12px 24px",
        fontWeight: 600,
      }}
    >
      {text}
    </Button>
  );
};

export default MyButton;
