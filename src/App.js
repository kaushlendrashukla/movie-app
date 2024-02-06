import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from "./components/Navbar";

function App() {


  return (
    <div className="App">
     <Navbar />
     <Banner />
      <Row title="TRENDING_NOW" fetchUrl={requests.fetchTrending} 
      isLargeRow = {true}
      />
      <Row title="NETFLIX_ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TOP_RATED_MOVIES" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION_MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY_MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR_MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE_Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
