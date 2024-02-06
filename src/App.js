import logo from './logo.svg';
import './App.css';
import './Header.css'
import './Home.css'
import movieImages from './movie-images';


import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function App() {
  const Header = () => {
    return (

      <header className="header">

        <div className="header_Nav">

          <div className="header_logo">
            NETFLIX
          </div>{

          }
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Browse by Languages</a>
        </div>

        <div class="bx bx-menu" id="menu-icon"></div>

      </header>

    );
  }

  const Billboard = () => {

    return (
      <div className="billboard-container">
        <div className="item billboard bbmovie"></div>


      </div>


    );
  }
  const Mainview = () => {

    const [width, setWidth] = useState(0);
    const movieSlider = useRef();
    useEffect(() => {
      setWidth(1500);
    }, []);


    return (
      <div className="content-container">
        <div className="section-title">
          <h2>New Releases</h2>

          <motion.div ref={movieSlider} className="movie-scroller" whileTap={{ cursor: "grabbing" }}>


            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="movie-card-1">
              {movieImages.map(image => {
                return (
                  <motion.div className="poster" key={image}>
                    <img src={image} alt="movie-image" />
                  </motion.div>
                );
              })}
            </motion.div>






          </motion.div>

        </div>

        <div className="section-title">
          <h2>Top 10 Movies in the U.S Today</h2>
          <div className="movie-card-2">
            <div className="movie-image"></div>
          </div>
        </div>

        <div className="section-title">
          <h2>Only on Netflix</h2>
          <div className="movie-card-3">
            <div className="movie-image"></div>
          </div>
        </div>

        <div className="section-title">
          <h2>Trending Now</h2>
          <div className="movie-card-4">
            <div className="movie-image"></div>
          </div>
        </div>



      </div>
    );
  }



  return (

    <div className="App">
      <Header />
      <Billboard />
      <Mainview />

    </div>


  );
}



export default App;
