import Navbar from "../components/common/Navbar/Navbar";
import MyCarousel from "../components/common/Carousel/MyCarousel";
import HistoryList from "../components/specific/HistoryList/HistoryList";
import "./styles/Home.css";

const Home = () => {
  const customItems = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 5,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 6,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 7,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 8,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 9,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 10,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
    {
      id: 11,
      image: `${process.env.PUBLIC_URL}/album.jpg`,
      title: "Canción",
      subtitle: "Artista",
    },
  ];

  return (
    <div>
      <Navbar />
      <MyCarousel items={customItems} headline="Para ti" />

      <div className="favorite-recommendations">
        <h2>Recomendaciones favoritas</h2>

        <HistoryList></HistoryList>
      </div>
    </div>
  );
};

export default Home;
