
import MovieModal from '../components/MovieModal';
import Top10MovieModal from '../components/Top10MovieModal';
import OnlyOnModal from '../components/OnlyOnModal';
import BillboardVideo from '../components/BillboardVideo';

function Home () {
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
      const Mainview = () => {
    
        return (
          <div className="content-container">
            <div className="section-title">
              <h2>Recently Added</h2>
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
              <h2>Only on Netflix</h2>
              <OnlyOnModal />
            </div>
    
            <div className="section-title">
              <h2>Trending Now</h2>
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