import Navbar from "../components/common/Navbar/Navbar";
import RecommendationListItem from "../components/specific/RecommendationListItem/RecommendationListItem";
import styles from "./styles/RecommendationList.module.css";
const RecommendationList = () => {
  const songs = [
    { songName: "Song Name 1", songArtist: "Artist 1" },
    { songName: "Song Name 2", songArtist: "Artist 2" },
    { songName: "Song Name 3", songArtist: "Artist 3" },
    { songName: "Song Name 4", songArtist: "Artist 3" }
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.RecommendationList_Body}>
        <h1>Lista de recomendaciones</h1>
        <div className={styles.RecommendationList_Container}>
          <div className={styles.RecommendationList_Container_List}>
            {songs.map((song, index) => (
              <RecommendationListItem
                key={index}
                songName={song.songName}
                songArtist={song.songArtist}
                imgRoute="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationList;