
import MovieModal from '../components/MovieModal';
import Top10MovieModal from '../components/Top10MovieModal';
import OnlyOnModal from '../components/OnlyOnModal';
import BillboardVideo from '../components/BillboardVideo';
import { motion } from "framer-motion";

import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  // {
  //   loading ?

  //   <ClipLoader
  //       color={color}
  //       loading={loading}
  //       cssOverride={override}
  //       size={150}
  //       aria-label="Loading Spinner"
  //       data-testid="loader"
  //     />

  //   :

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000)
  // }, []);

  const Billboard = () => {
  

    
    return (
      <div className="billboard-container">
        <div className="billboard">
          <BillboardVideo />
        </div>
        <div className="billboard-title billboard-logo"></div>
        <div className="billboard-description">
          If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound.
        </div>

        <button className="billboard-play-btn">
          <p><i class="ri-play-fill"></i>   </p>
          Play
        </button>

        <button className="billboard-info-btn">
          <p><i class="ri-information-line"></i>   </p>
          More Info
        </button>



      </div>


    );
  }

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      // x: "100%", // Start off the screen to the right
    },
    animate: {
      opacity: 1,
      x: 10,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };



  const Mainview = () => {

    return (
      <div className="content-container">

        <div className="section-title">
          <div className="section-title-text"
            style={{
              display: 'flex',
              width: '50%',
            }}>
            <h2>Recently Added</h2>
            <motion.a href='/AllMovies'
              style=
              {{ color: 'deepskyblue', left: '-20px' }}
              whileHover="animate"
              variants={fadeInAnimationVariants}>Explore All<i class="ri-arrow-right-s-line" style={{ fontSize: '18px' }}></i></motion.a>
          </div>
          <MovieModal />
        </div>


        <div className="section-title">
          <h2>Top 10 Movies in the U.S Today</h2>
          <Top10MovieModal />
          {/* <motion.div ref={movieSlider} className="movie-scroller" whileTap={{ cursor: "grabbing" }}>
    
                <motion.div drag="x" dragConstraints={{
                  right: 25,
                  left: -width
                }}
                  className="movie-card-1">
                  {movieImages.map(image => {
                    return (
                      <motion.div className="poster" key={image}>
    
                        <img src={image} alt="movie-image" />
                        <div style={{ position: 'relative', top: -90, left: 0, width: '100%', height: '100%' }}>
                        
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
    
              </motion.div> */}
        </div>

        <div className="section-title">
          <div className="section-title-text"
            style={{
              display: 'flex',
              width: '50%',
            }}>
            <h2>Only on Netflix</h2>
            <motion.a href='/AllMovies'
              style=
              {{ color: 'deepskyblue', left: '-20px' }}
              whileHover="animate"
              variants={fadeInAnimationVariants}>Explore All<i class="ri-arrow-right-s-line" style={{ fontSize: '18px' }}></i></motion.a>
          </div>
          <OnlyOnModal />
        </div>

        <div className="section-title">
          <div className="section-title-text"
            style={{
              display: 'flex',
              width: '50%',
            }}>
            <h2>Trending Now</h2>
            <motion.a href='/AllMovies'
              style=
              {{ color: 'deepskyblue', left: '-20px' }}
              whileHover="animate"
              variants={fadeInAnimationVariants}>Explore All<i class="ri-arrow-right-s-line" style={{ fontSize: '18px' }}></i></motion.a>
          </div>
          <MovieModal />
        </div>


      </div>
    );
  }

  return (
    <>
      <Billboard />
      <Mainview />
    </>

  );
}




export default Home;