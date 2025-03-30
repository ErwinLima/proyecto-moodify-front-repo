import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Navbar from "../components/common/Navbar/Navbar";
import styles from "./styles/RecommendationForm.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MyTextField from "../components/common/input/MyTextField";

const RecommendationForm = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.RecommendationForm_Body}>
        <h1>Solicitar recomendación</h1>
        <div className={styles.RecommendationForm_Container}>
          <div className={styles.RecommendationForm_Container_Form}>
            <FormControl>
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

              <InputLabel id="input-label-quantity">
                Cantidad de recomendaciones
              </InputLabel>
              <MyTextField
                labelText="Cantidad de recomendaciones"
                type="number"
              />

              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Subir fotografía
              </Button>

              <Button
                variant="contained"
                color="secondary"
                sx={{ width: "468px", height: "65px" }}
              >
                Obtener recomendación
              </Button>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;
