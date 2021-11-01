import React, { useEffect} from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesOrShow, setType } from '../../redux/movieSlice';
import Search from '../Search';
import {getSelectedType} from '../../redux/movieSelector';

const Home = () => {
    const dispatch = useDispatch();
    const type= useSelector(getSelectedType)
    useEffect(() => {
        dispatch(fetchMoviesOrShow({type, searchMovieText:'2021'}));
    }, [dispatch, type]);
    return (
        <div>
            Click here to show <button onClick={()=>dispatch(setType('movie'))}> movies </button> or <button onClick={()=>dispatch(setType('series'))}> series</button>
            <Search />
            <MovieListing />
        </div>
    );
};

export default Home;