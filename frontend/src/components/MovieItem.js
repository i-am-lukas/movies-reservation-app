import React from 'react';

class MovieItem extends React.Component {
    render() {
        return (
            <div style={this.divStyle()}>
                    <img src={this.props.movie.poster} style={this.imageStyle()} alt='opis zdjecia'  />
                    <div>
                        <div style={this.movieName()}>{this.props.movie.name}</div>
                        <div>Required age: {this.props.movie.minAge}</div>
                    </div>

            </div>
        )
    }

    //ciekawy sposob zapisywania styli w componencie (jako f-cja)
    imageStyle = () => {
        return {
            height: '170px',
            width: '120px',
            margin: '0 20px'
        }
    }

    divStyle = () => {
        return {
            border: '1px solid pink', 
            display: 'flex',
            margin: '20px 0',
            backgroundColor: '#8e2008', 
            padding: '20px 5px'
        }
    }

    movieName = () => {
        return {
            fontSize: '36px'
        }
    }
}

export default MovieItem;