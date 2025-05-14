import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./Webcam.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

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

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [flash, setFlash] = useState(false);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const capture = () => {
    // Flash animation
    setFlash(true);
    setTimeout(() => setFlash(false), 300);

    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div>
      {flash && <div className="flash-overlay" />}
      <div className="card">
        <div className="camera-container">
          {!capturedImage ? (
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/png"
                videoConstraints={videoConstraints}
                className="webcam"
              />
              <button className="btn" onClick={capture}>
                <FontAwesomeIcon icon={faCamera} />
              </button>
            </>
          ) : (
            <>
              <img src={capturedImage} alt="Captura" className="captured-img" />
            </>
          )}
        </div>
        <div className="btn-option-group">
          <Button
            sx={{ width: "220px", height: "55px" }}
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<FontAwesomeIcon icon={faCamera} />}
            onClick={() => setCapturedImage(null)}
          >
            Abrir cámara
          </Button>
          <Button
            sx={{ width: "220px", height: "55px" }}
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
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;
