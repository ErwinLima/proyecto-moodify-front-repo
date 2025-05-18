import Navbar from "../components/common/Navbar/Navbar";
import MyCarousel from "../components/common/Carousel/MyCarousel";
import HistoryList from "../components/specific/HistoryList/HistoryList";
import "./styles/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [emotion, setEmotion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSongs = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/songs`,
          {
            headers: {
              Authorization: `${accessToken},${refreshToken}`,
            },
          }
        );

        localStorage.setItem("songsDefault", JSON.stringify(response.data));

        const formattedDefaultSongs = response.data.songs.map(
          (song, index) => ({
            id: index,
            image: song.img,
            title: song.name,
            subtitle: song.artist,
          })
        );

        setCarouselItems(formattedDefaultSongs);
      } catch (error) {
        console.error("Error al obtener canciones:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSongs();
  }, []);

  return (
    <div>
      <Navbar />
      <MyCarousel items={carouselItems} headline="Para ti" />

      <div className="favorite-recommendations">
        <h3>Recomendaciones pasadas</h3>

        <HistoryList
          songs={JSON.parse(localStorage.getItem("songsDefault"))?.songs || []}
        />
      </div>
    </div>
  );
};

export default Home;
