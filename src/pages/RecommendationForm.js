import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Navbar from "../components/common/Navbar/Navbar";
import { styled } from "@mui/material/styles";
import styles from "./styles/RecommendationForm.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MyTextField from "../components/common/input/MyTextField";
import { Link } from "react-router-dom";
import Webcam from "../components/specific/Webcam/Webcam";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const RecommendationForm = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.RecommendationForm_Body}>
        <h2>Solicitar recomendación</h2>
        <div className={styles.RecommendationForm_Container}>
          <div className={styles.RecommendationForm_Container_Form}>
            {/* Contenedor de las dos columnas */}
            <div className={styles.RecommendationForm_Columns}>
              {/* Primera columna */}
              <div>
                <Webcam />
              </div>

              {/* Segunda columna */}
              <div className={styles.RecommendationForm_Column}>
                <FormControl sx={{ width: "392px", height: "55px" }}>
                  <InputLabel id="select-label-genres">Géneros</InputLabel>
                  <Select
                    labelId="select-label-genres"
                    id="select-genres"
                    label="Géneros"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    <MenuItem value={"SA"}>Salsa</MenuItem>
                    <MenuItem value={"RE"}>Reggeaton</MenuItem>
                    <MenuItem value={"RO"}>Rock</MenuItem>
                    <MenuItem value={"PO"}>Pop</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ width: "392px", height: "55px" }}>
                  <MyTextField
                    placeholder="Cantidad de recomendaciones"
                    type="number"
                  />
                </FormControl>
                <FormControl sx={{ width: "392px", height: "55px" }}>
                  <InputLabel id="select-label-country">País</InputLabel>
                  <Select
                    labelId="select-label-country"
                    id="select-country"
                    label="País"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    <MenuItem value={"PE"}>Perú</MenuItem>
                    <MenuItem value={"CO"}>Colombia</MenuItem>
                    <MenuItem value={"AR"}>Argentina</MenuItem>
                    <MenuItem value={"CL"}>Chile</MenuItem>
                  </Select>
                </FormControl>

                <div className={styles.RecommendationForm_Button}>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ width: "392px", height: "55px", marginTop: "20px" }}
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
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;
