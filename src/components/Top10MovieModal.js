
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import movies from '../top-10-movies'; // Import the movies array
import top10Logos from '../top10logos';


import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import '../Home.css';




function MoviePopup() {
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to store the selected movie

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle when a movie is selected
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    handleShow(); // Show the modal when a movie is selected
  };



  const [width, setWidth] = useState(0);
  const movieSlider = useRef();
  useEffect(() => {
    setWidth(900);
  }, []);

  return (
    <>
      <motion.div ref={movieSlider} className="movie-scroller" whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x" dragConstraints={{
          right: 95,
          left: -width
        }}
          className="movie-card-1" style={{
            width: '120px',height: '220px', gap: '7rem'
          }}>

          {movies.map((movie, index) => (
            <div key={movie.id} className="poster" style={{ width: '100%' }}>
              <img src={movie.image}
                alt={movie.title}
                style={{
                  // boxShadow: '0px 4px 43px 10px rgba(0, 0, 0, 0.75)',
                  top: 10,
                  position: 'relative',
                  ...(index === 9 && {
                    left: '30px'
                  })
                }} />

              {/* Render top 10 logo next to each movie */}
              {top10Logos[index] && (
                <img class="top10logos" src={top10Logos[index]} alt={`Top 10 Logo ${index + 1}`}
                  style=
                  {{
                    position: 'absolute',
                    width: '185%',
                    height: 'auto',
                    top: '-19px',
                    left: '-120%',
                    transition: 'none',
                    zIndex: -1,
                    ...(index === 9 && {
                      left: '-118px'
                    }),
                    ...(index === 0 && {
                      left: '-135px'
                    })





                  }} />
              )}


              <button onClick={() => handleMovieSelect(movie)} className="top-10-watch-movie-btn" 
              style={{ 
                position: 'relative', 
                top: -90 ,
                ...(index === 9 && {
                  left: '30px'
                }),
                
                }}>
                More Info
              </button>


            </div>



          ))}

          <div className="movie-card-1" style={{ width: '100%' }}>
            {top10Logos.map(toplogo => {
              return (
                <motion.div className="poster" key={toplogo}>

                  <img src={toplogo} alt="top-10-logo" />
                  <div style={{
                    position: 'absolute',
                    top: -90,
                    left: '10%',
                    width: '100%',
                    height: '100%'
                  }}>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </motion.div>



      <Modal show={show} onHide={handleClose} animation={true} size="lg">
        <Modal.Header closeButton style={{ background: 'rgb(20,20,20)', color: 'white' }}>
          <Modal.Title>{selectedMovie ? selectedMovie.title : 'Movie Title'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'rgb(20,20,20)', color: 'white', padding: '30px' }}>
          {selectedMovie && (
            <>
              <p>{selectedMovie.misc}</p>
              <video id="videoPlayer" style=
                {{

                  margin: '20px 0 20px 60px'
                }}
                width='600px' controls autoPlay={false}>
                <source src={selectedMovie.videoSource} />
              </video>
              <p>{selectedMovie.description}</p>

            </>
          )}
        </Modal.Body>
        <Modal.Footer style={{ background: 'rgb(20,20,20)', color: 'white' }}>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>

          {/* <Button variant="primary" onClick={handleWatchMovie}>
            Watch Movie
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MoviePopup;
