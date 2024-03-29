import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import movies from '../onlyonmovies'; // Import the movies array
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import '../Home.css';



function MoviePopup() {

  const [shuffledMovies, setShuffledMovies] = useState([]);

  // Function to shuffle the array
  const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
  };

  useEffect(() => {
      // Shuffle the movies array when the component mounts
      setShuffledMovies(shuffleArray(movies));
  }, []);

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
    setWidth(800);
  }, []);

  return (
    <>
      <motion.div ref={movieSlider} className="movie-scroller" whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x" dragConstraints={{
          right: 30,
          left: -width
        }}
          className="movie-card-1">

          {shuffledMovies.map((movie) => (
            <div key={movie.id} className="posterregular">
              <img src={movie.image}
                alt={movie.title}
                style={{
                  // boxShadow: '0px 4px 43px 10px rgba(0, 0, 0, 0.75)',
                  top: 10,
                  position: 'relative'
                }} />

              <button onClick={() => handleMovieSelect(movie)} className="watch-movie-btn" style={{ position: 'relative', top: -90 , width: '304px'}}>
              More Info
              </button>
            </div>

          ))}

        </motion.div>
      </motion.div>



      <Modal show={show} onHide={handleClose} animation={true} size="lg">
        <Modal.Header closeButton style={{background: 'rgb(20,20,20)', color: 'white'}}>
          <Modal.Title>{selectedMovie ? selectedMovie.title : 'Movie Title'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: 'rgb(20,20,20)', color: 'white', padding: '30px'}}>
          {selectedMovie && (
            <>
            <p>{selectedMovie.misc}</p>
              <video id="videoPlayer" style=
              {{
                marginLeft: '60px', 
                margin: '20px 0 20px 0' 
              }} 
              width='600px' controls muted autoPlay={false}>
                <source src={selectedMovie.videoSource} />
              </video>
              <p>{selectedMovie.description}</p>

            </>
          )}
        </Modal.Body>
        <Modal.Footer style={{background: 'rgb(20,20,20)', color: 'white'}}>
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
