import Navbar from "../components/common/Navbar/Navbar";
import styles from "./styles/RecommendationHistory.module.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const RecommendationHistory = () => {

  function createData( id, imgRoute , songName, songArtist, songAlbum, songGenre, date){
    return { id, imgRoute, songName, songArtist, songAlbum, songGenre, date };
  }

  const rows = [
    createData(1, "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228", "Song Name 1", "Artist 1", "Album 1", "Genre 1", "2023-10-01"),
    createData(2, "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228", "Song Name 2", "Artist 2", "Album 2", "Genre 2", "2023-10-02"),
    createData(3, "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228", "Song Name 3", "Artist 3", "Album 3", "Genre 3", "2023-10-03"),
    createData(4, "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228", "Song Name 4", "Artist 4", "Album 4", "Genre 4", "2023-10-04"),
    createData(5, "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228", "Song Name 5", "Artist 5", "Album 5", "Genre 5", "2023-10-05"),
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.RecommendationHistory_Body}>
        <h1>Historial</h1>
        <div className={styles.RecommendationHistory_Container}>
          <Table sx={{ minWidth: '1184px' }} aria-label="simple table">
            <TableHead>
              <TableCell></TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Artista</TableCell>
              <TableCell align="left">Álbum</TableCell>
              <TableCell align="left">Género</TableCell>
              <TableCell align="left">Fecha</TableCell>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={row.imgRoute} alt={row.songName} className={styles.RecommendationHistory_Img} />
                  </TableCell>
                  <TableCell align="left">{row.songName}</TableCell>
                  <TableCell align="left">{row.songArtist}</TableCell>
                  <TableCell align="left">{row.songAlbum}</TableCell>
                  <TableCell align="left">{row.songGenre}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* Add your login form here */}
    </div>
  );
}

export default RecommendationHistory;