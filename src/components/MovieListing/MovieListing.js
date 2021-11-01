import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies} from '../../redux/movieSelector';
import MovieCard from '../MovieCard/MovieCard';

const MovieListing = () => {
    const movies= useSelector(getAllMovies)

    return (
        <div className="movie-list">
            {movies.Response && movies.Response==='True' ? movies.Search.map((movie, index)=>
            <MovieCard key={index} data={movie} />
    ): '<h3> something went wrong </h3>'}
        </div>
    );
};

export default MovieListing;