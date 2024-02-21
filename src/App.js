

import './App.css';
import './Header.css'
import './Home.css'

import {Route, Routes} from "react-router-dom"


import Header from './components/header';
import AllMovies from './pages/AllMovies';
import Home from './pages/Home';




function App() {




  return (
    <>
      <Header />
        <Routes> 
          <Route path="/" element = {<Home />} />
          <Route path="/allmovies" element = {<AllMovies />} />
        </Routes>


    </>

  );
}



export default App;