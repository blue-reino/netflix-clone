import { useState, useEffect, useMemo } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import movies from '../allmoviescompiled'; // Import the movies array
import '../Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AllMoviesComponent() {
    const [search, setSearch] = useState('');
    const [shuffledMovies, setShuffledMovies] = useState([]);

    // Function to shuffle the movies array
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    useEffect(() => {
        // Shuffle the movies array only once on mount
        setShuffledMovies(shuffleArray(movies));
    }, []);

    // Memoized filtered movies to prevent unnecessary re-renders
    const filteredMovies = useMemo(() => {
        return search.trim() === ''
            ? shuffledMovies // Show all movies when search is empty
            : shuffledMovies.filter((movie) => 
                movie.title.toLowerCase().includes(search.toLowerCase())
            );
    }, [search, shuffledMovies]);

    const [show, setShow] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
        handleShow();
    };

    return (
        <>
            <div className="input-group rounded" style={{ width: '50%' }}>
                <input 
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 40 }}>
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className="postercombined" style={{ width: '14.5%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <img 
                            src={movie.image}
                            alt={movie.title}
                            style={{
                                boxShadow: '0px 4px 43px 10px rgba(0, 0, 0, 0.75)',
                                position: 'relative'
                            }} 
                        />
                        <button onClick={() => handleMovieSelect(movie)} className="watch-movie-btn" style={{ position: 'relative', top: -93 }}>
                            More Info
                        </button>
                    </div>
                ))}
            </div>

            <Modal show={show} onHide={handleClose} animation={true} size="lg">
                <Modal.Header closeButton style={{ background: 'rgb(20,20,20)', color: 'white' }}>
                    <Modal.Title>{selectedMovie ? selectedMovie.title : 'Movie Title'}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: 'rgb(20,20,20)', color: 'white', padding: '30px' }}>
                    {selectedMovie && (
                        <>
                            <p>{selectedMovie.misc}</p>
                            <iframe
                                title="Movie Player"
                                width="740"
                                height="450"
                                style={{ border: 'none' }}
                                src={selectedMovie.videoSource}
                                allowFullScreen
                            ></iframe>
                            <p>{selectedMovie.description}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer style={{ background: 'rgb(20,20,20)', color: 'white' }}>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AllMoviesComponent;
