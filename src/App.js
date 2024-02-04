import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {


  return (
    <div className="App">
      <h1>NetFlix</h1>
      <Row title="TRENDING_NOW" fetchUrl={requests.fetchTrending} />
      <Row title="NETFLIX_ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TOP_RATED_MOVIES" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION_MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="COMEDY_MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR_MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE_Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
