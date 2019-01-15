import React from 'react';
import MovieItem from './MovieItem';

class Movies extends React.Component {
    render() {
        return this.props.movies.map((movie) => (
            <MovieItem key={movie._id} movie={movie}/>  
        ))
    }
}

export default Movies;