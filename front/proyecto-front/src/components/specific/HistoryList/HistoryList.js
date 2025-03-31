import React from "react";
import styles from "./HistoryList.module.css";

const HistoryList = () => {
  return (
    <div>
      <ul className={styles.songList}>
        <li className={styles.song}>
          <img alt="song" src={`${process.env.PUBLIC_URL}/album.jpg`}></img>
          <div className={styles.info}>
            <ul className={styles.infoList}>
              <li className={styles.nameSong}>
                <span>Nombre</span>
                <span>Artista</span>
              </li>
              <li>Álbum</li>
              <li>4:00</li>
            </ul>
          </div>
        </li>
        <li>
          <div className={styles.song}>
            <img alt="song" src={`${process.env.PUBLIC_URL}/album.jpg`}></img>
            <div className={styles.info}>
              <ul className={styles.infoList}>
                <li className={styles.nameSong}>
                  <span>Nombre</span>
                  <span>Artista</span>
                </li>
                <li>Álbum</li>
                <li>4:00</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HistoryList;
