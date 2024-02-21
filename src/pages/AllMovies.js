import './AllMovies.css'
import AllMoviesComponenet from "../components/AllMoviesComponent";



const AllMovies = () => {
    return (
        <div className="AllMoviesContainer">
            <div className="AllMoviesTitle">
                <h2 >All Movies </h2>
                <AllMoviesComponenet />
            </div>
        </div>
    )
}

export default AllMovies;