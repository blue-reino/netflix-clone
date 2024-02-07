import logo from './images/netflix-logo.png';
import './App.css';
import './Header.css'
import './Home.css'
import movieImages from './movie-images';


import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import MovieModal from './components/MovieModal';

function App() {
  const Header = () => {

    const [navbar, setNavBar] = useState(false);

    const changeBackground = () => {

      if(window.scrollY >= 70) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }

    };

    window.addEventListener('scroll', changeBackground);


    return (

      <header className={navbar ? 'header active' : 'header'}>

        <a href="#" className="logo"><img src={logo} width="15%" /></a>

        <div className="header_Nav">

          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Browse by Languages</a>
        </div>

        {/* <div class="bx bx-menu" id="menu-icon"></div> */}

      </header>

    );
  }

  const Billboard = () => {

    return (
      <div className="billboard-container">
        <div className="billboard bbmovie"></div>
        <div className="billboard-title">A Quiet Place</div>
        <div className="billboard-description">
        If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. 
        </div>

        <button className = "billboard-play-btn">
        <p><i class="ri-play-fill"></i>   </p>
        Play  
        </button> 



      </div>


    );
  }
  const Mainview = () => {

    const [width, setWidth] = useState(0);
    const movieSlider = useRef();
    useEffect(() => {
      setWidth(2500);
    }, []);


    return (
      <div className="content-container">
        <div className="section-title">
          <h2>New Releases</h2>

          <motion.div ref={movieSlider} className="movie-scroller" whileTap={{ cursor: "grabbing" }}>


            <motion.div drag="x" dragConstraints={{
              right: 25,
              left: -width
            }}
              className="movie-card-1">
              {movieImages.map(image => {
                return (
                  <motion.div className="poster" key={image}>

                    <img src={image} alt="movie-image" />
                    <div style={{ position: 'relative', top: -90, left: 0, width: '100%', height: '100%'}}>
                      <MovieModal />
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>

        </div>

        <div className="section-title">
          <h2>Top 10 Movies in the U.S Today</h2>
          <motion.div ref={movieSlider} className="movie-scroller" whileTap={{ cursor: "grabbing" }}>


<motion.div drag="x" dragConstraints={{
  right: 25,
  left: -width
}}
  className="movie-card-1">
  {movieImages.map(image => {
    return (
      <motion.div className="poster" key={image}>

        <img src={image} alt="movie-image" />
        <div style={{ position: 'relative', top: -90, left: 0, width: '100%', height: '100%'}}>
          <MovieModal />
        </div>

      </motion.div>
    );
  })}
</motion.div>

</motion.div>
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
