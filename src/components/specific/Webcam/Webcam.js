import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./Webcam.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
  const [loading, setLoading] = useState(false);
  const [emotion, setEmotion] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);

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
    localStorage.setItem("capturedImage", imageSrc);
  };

  return (
    <div>
      {flash && <div className="flash-overlay" />}
      <div className="card">
        <div className="camera-container">
          {!cameraOn ? (
            <div className=" webcam camera-off-message">Cámara apagada</div>
          ) : !capturedImage ? (
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
              {emotion && (
                <div className="emotion-result">
                  Emoción detectada: <strong>{emotion}</strong>
                </div>
              )}
            </>
          )}
        </div>

        <div className="btn-option-group">
          <Button
            sx={{ width: "160px", height: "40px", fontSize: "12px" }}
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<FontAwesomeIcon icon={faCamera} />}
            onClick={() => {
              setCameraOn(!cameraOn);
              setCapturedImage(null);
            }}
          >
            {cameraOn ? "Apagar" : "Encender"}
          </Button>
          {capturedImage && cameraOn && (
            <Button
              sx={{ width: "160px", height: "60px", fontSize: "12px" }}
              component="label"
              variant="outlined"
              startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
              onClick={() => {
                setCapturedImage(null);
              }}
            >
              Volver a la camara
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;
