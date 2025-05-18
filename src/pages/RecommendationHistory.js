import Navbar from "../components/common/Navbar/Navbar";
import styles from "./styles/RecommendationHistory.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import axios from "axios";

const RecommendationHistory = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecommendations = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken || !refreshToken) {
        setError("Tokens no disponibles.");
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/recommendation-history`,
          {
            headers: {
              Authorization: `${accessToken},${refreshToken}`,
            },
          }
        );

        setRows(response.data);
      } catch (err) {
        console.error("Error al obtener historial:", err);
        setError("No se pudo cargar el historial.");
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.RecommendationHistory_Body}>
        <h2>Historial</h2>
        <div className={styles.RecommendationHistory_Container}>
          <TableContainer className={styles.tableContainer}>
            <Table stickyHeader sx={{ minWidth: "1100px" }}>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.stickyHeader}></TableCell>
                  <TableCell align="center" className={styles.stickyHeader}>
                    Nombre
                  </TableCell>
                  <TableCell align="center" className={styles.stickyHeader}>
                    Artista
                  </TableCell>
                  <TableCell align="center" className={styles.stickyHeader}>
                    Álbum
                  </TableCell>
                  <TableCell align="center" className={styles.stickyHeader}>
                    Emoción
                  </TableCell>
                  <TableCell align="center" className={styles.stickyHeader}>
                    Fecha
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} className={styles.tableRowCustom}>
                    <TableCell>
                      <img
                        src={row.imgRoute}
                        alt={row.songName}
                        className={styles.RecommendationHistory_Img}
                      />
                    </TableCell>
                    <TableCell align="center">{row.songName}</TableCell>
                    <TableCell align="center">{row.songArtist}</TableCell>
                    <TableCell align="center">{row.songAlbum}</TableCell>
                    <TableCell align="center">{row.emotion}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default RecommendationHistory;
