import { Button } from "@mui/material";
import Navbar from "../components/common/Navbar/Navbar";
import { styled } from "@mui/material/styles";
import styles from "./styles/RecommendationForm.module.css";
import { Link } from "react-router-dom";
import Webcam from "../components/specific/Webcam/Webcam";

const RecommendationForm = () => {
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
            >
              <Link
                to="/recommendation-list"
                style={{ textDecoration: "none", color: "white" }}
              >
                Obtener recomendación
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;
