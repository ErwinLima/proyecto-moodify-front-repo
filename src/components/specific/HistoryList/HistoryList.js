import React, { useEffect, useState } from "react";
import styles from "./HistoryList.module.css";

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const HistoryList = ({ songs }) => {
  const [defaultSongs, setDefaultSongs] = useState([]);

  useEffect(() => {
    if (songs.length > 0) {
      const shuffled = shuffleArray(songs);
      setDefaultSongs(shuffled);
    }
  }, [songs]);

  // Formatea duración en segundos a "min:seg"
  const formatDuration = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.historyWrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.songTable}>
          <thead>
            <tr>
              <th>Portada</th>
              <th>Nombre</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            {defaultSongs.map((song, index) => (
              <tr key={index}>
                <td>
                  <img
                    alt={song.name}
                    src={song.img}
                    className={styles.albumImage}
                  />
                </td>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>{song.album || "Desconocido"}</td>
                <td>
                  {song.duration
                    ? formatDuration(song.duration / 1000)
                    : "3:30"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryList;
