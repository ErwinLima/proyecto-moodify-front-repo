import { Button } from "@mui/material";
import Navbar from "../components/common/Navbar/Navbar";
import { styled } from "@mui/material/styles";
import styles from "./styles/RecommendationForm.module.css";
import { Link } from "react-router-dom";
import Webcam from "../components/specific/Webcam/Webcam";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecommendationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGetRecommendation = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    const imageSrc = localStorage.getItem("capturedImage");
    if (!imageSrc) return alert("Primero debes capturar una imagen.");

    const base64 = imageSrc.replace(/^data:image\/\w+;base64,/, "");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/analyze-emotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken} ${refreshToken}`, // <- tokens separados por espacio
        },
        body: JSON.stringify({ image: base64, userId: 1 }),
      });

      const newToken = response.headers.get("x-new-access-token");
      if (newToken) {
        localStorage.setItem("accessToken", newToken);
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Error al obtener la recomendación.");
      }

      localStorage.setItem("emotionData", JSON.stringify(data)); // Guarda emoción y canciones
      navigate("/recommendation-list");
    } catch (err) {
      alert("Ocurrió un error al obtener la recomendación.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.RecommendationForm_Body}>
        <h2>Solicitar recomendación</h2>
        <div className={styles.RecommendationForm_Container}>
          <div className={styles.RecommendationForm_Container_Form}>
            <div>
              <Webcam />
            </div>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "100%",
                height: "55px",
                marginTop: "20px",
              }}
              onClick={handleGetRecommendation}
              disabled={loading}
            >
              Obtener recomendación
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;
