import React from 'react';

const MovieView = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='d-flex justify-content-start m-1'>
                    <img src={movie.Poster} alt='no image'></img>
                </div>
            ))}
        </>
    );
};
export default MovieView;