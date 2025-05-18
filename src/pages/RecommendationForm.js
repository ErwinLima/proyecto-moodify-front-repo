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
  const [emotion, setEmotion] = useState(null);

  const analyzeEmotions = async (imageSrc) => {
    setLoading(true);
    const base64 = imageSrc.replace(/^data:image\/\w+;base64,/, "");

    try {
      const response = await fetch("http://localhost:5000/analyze-emotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64, userId: 1 }),
      });

      const data = await response.json();
      setEmotion(data.emotion);
      console.log("Canciones", data);
    } catch (error) {
      console.error("Error al analizar emociones:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetRecommendation = async () => {
    const imageSrc = localStorage.getItem("capturedImage");
    if (!imageSrc) return alert("Primero debes capturar una imagen.");

    const base64 = imageSrc.replace(/^data:image\/\w+;base64,/, "");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/analyze-emotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64, userId: 1 }),
      });

      const data = await response.json();
      localStorage.setItem("emotionData", JSON.stringify(data)); // Guarda emoción y canciones
      navigate("/recommendation-list");
    } catch (err) {
      console.error(err);
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
