
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Banner></Banner>
      <Row title='NETFLIX ORIGINALS' url={requests.fetchNetflixOriginals} islarge></Row>
      <Row title='TRENDING NOW' url={requests.fetchTrending} ></Row>
      <Row title='ACTION MOVIES' url={requests.fetchActionMovies}></Row>
      <Row title='COMEDY MOVIES' url={requests.fetchComedyMovies}></Row>
      <Row title='HORROR MOVIES' url={requests.fetchHorrorMovies}></Row>
      <Row title='DOCUMENTARIES' url={requests.fetchDocumantaries}></Row>
      <Row title='ROMANCE MOVIES' url={requests.fetchRomanceMovies}></Row>
    </div>
  );
}

export default App;
