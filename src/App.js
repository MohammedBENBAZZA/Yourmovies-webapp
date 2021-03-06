import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
    <Banner></Banner>
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge={true}></Row>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLarge={true}></Row>
     <Row title="Trending Movies" fetchUrl={requests.fetchTrending}></Row>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>


    
    </div>
  );
}

export default App;
