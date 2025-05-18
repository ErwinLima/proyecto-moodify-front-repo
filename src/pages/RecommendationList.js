import Navbar from "../components/common/Navbar/Navbar";
import RecommendationListItem from "../components/specific/RecommendationListItem/RecommendationListItem";
import styles from "./styles/RecommendationList.module.css";
const RecommendationList = () => {
  const emotionData = JSON.parse(localStorage.getItem("emotionData"));
  const songs = emotionData?.songs || [];

  return (
    <div>
      <Navbar />
      <div className={styles.RecommendationList_Body}>
        <h2>Lista de recomendaciones</h2>
        {emotionData?.emotion && <h4>{emotionData.emotion}</h4>}
        <div className={styles.RecommendationList_Container}>
          <div className={styles.RecommendationList_Container_List}>
            {songs.map((song, index) => (
              <RecommendationListItem
                key={index}
                songName={song.name}
                songArtist={song.artist}
                imgRoute={song.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationList;
