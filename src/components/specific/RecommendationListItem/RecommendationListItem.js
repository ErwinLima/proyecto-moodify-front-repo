import React from 'react';
import styles from './RecommendationListItem.module.css';

const RecommendationListItem = ({ songName, songArtist, imgRoute }) => {
  return (
    <div>
      <div className={styles.RecommendationListItem_Container}>
        <div className={styles.RecommendationListItem_Container_Info}>
          <img
            className={styles.RecommendationListItem_Container_Info_Image}
            src={imgRoute}
            alt="Song Cover"
          />
          <div className={styles.RecommendationListItem_Container_Info_Text}>
            <div className={styles.RecommendationListItem_Container_SongName}>
              {songName}
            </div>
            <div className={styles.RecommendationListItem_Container_SongArtist}>
              {songArtist}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationListItem;
