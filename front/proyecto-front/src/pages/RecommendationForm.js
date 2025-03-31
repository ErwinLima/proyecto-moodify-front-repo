import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Navbar from "../components/common/Navbar/Navbar";
import { styled } from '@mui/material/styles';
import styles from './styles/RecommendationForm.module.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MyTextField from "../components/common/input/MyTextField";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const RecommendationForm = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.RecommendationForm_Body}>
        <h1>Solicitar recomendación</h1>
        <div className={styles.RecommendationForm_Container}>
          <div className={styles.RecommendationForm_Container_Form}>
            {/* Contenedor de las dos columnas */}
            <div className={styles.RecommendationForm_Columns}>
              {/* Primera columna */}
              <div className={styles.RecommendationForm_Column}>
                <FormControl
                  sx={{ width: '392px', height: '55px' }}>
                  <InputLabel
                    id="select-label-genres">Géneros</InputLabel>
                  <Select
                    labelId="select-label-genres"
                    id="select-genres"
                    label="Géneros"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    <MenuItem value={'SA'}>Salsa</MenuItem>
                    <MenuItem value={'RE'}>Reggeaton</MenuItem>
                    <MenuItem value={'RO'}>Rock</MenuItem>
                    <MenuItem value={'PO'}>Pop</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ width: '392px', height: '55px' }}>
                  <MyTextField
                    labelText="Cantidad de recomendaciones"
                    type="number"
                  />
                </FormControl>
              </div>

              {/* Segunda columna */}
              <div className={styles.RecommendationForm_Column}>
                <FormControl sx={{ width: '392px', height: '55px' }}>
                  <InputLabel id="select-label-country">País</InputLabel>
                  <Select
                    labelId="select-label-country"
                    id="select-country"
                    label="País"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    <MenuItem value={'PE'}>Perú</MenuItem>
                    <MenuItem value={'CO'}>Colombia</MenuItem>
                    <MenuItem value={'AR'}>Argentina</MenuItem>
                    <MenuItem value={'CL'}>Chile</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ width: '392px', height: '55px' }}>
                  <Button
                    sx={{ width: '392px', height: '55px' }}
                    component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Subir fotografía
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(event) => console.log(event.target.files)}
                      multiple
                    />
                  </Button>
                </FormControl>
              </div>
            </div>

            <div className={styles.RecommendationForm_Button}>

              <Button
                variant="contained"
                color="secondary"
                sx={{ width: '468px', height: '65px', marginTop: '20px' }}
              >
                Obtener recomendación
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;
