import React from 'react';

class MovieItem extends React.Component {
    render() {
        return (
            <div style={this.wholeMovieDiv()}>
                    <img src={this.props.movie.poster} style={this.imageStyle()} alt='opis zdjecia'  />
                    <div style={this.nameAge()}>
                        <div style={this.movieName()}>{this.props.movie.name}</div>
                        
                    </div>
                    <div style={ this.description() }>
                        <span style={{ fontSize: '20px', fontWeight: '800' }}> Description:</span> <br /> <br />
                        {this.props.movie.description}
                        <div style={this.requiredAge()}>Required age: {this.props.movie.minAge}</div>
                    </div>

            </div>
        )
    }

    //ciekawy sposob zapisywania styli w componencie (jako f-cja)
    wholeMovieDiv = () => {
        return {
            border: '2px solid #0c0c0c',
            display: 'flex',
            margin: '20px 0',
            backgroundColor: '#b73135',
            padding: '15px 5px',
            fontFamily: 'Open Sans, sans-serif',
            justifyContent: 'space-around',

        }
    }

    nameAge = () => {
        return {
            display: 'flex', 
            justifyContent: 'space-around',
            paddingRight: '20px',
            flexBasis: '25%',
        }
    }

    imageStyle = () => {
        return {
            height: '170px',
            width: '120px',
            margin: '0 20px',
            flexBasis: 'auto',
            alignSelf: 'center',
            border: '1px solid black'
        }
    }

    movieName = () => {
        return {
            fontSize: '36px',
            fontFamily: 'Roboto Mono, monospace',
            letterSpacing: '1px',
            lineHeight: '36px',
            wordSpacing: '-10px', 
            alignSelf: 'center'
        }
    }

    requiredAge = () => {
        return {
            paddingTop: '5px'
        }
    }
    
    description = () => {
        return {
            textAlign: 'left',
            padding: '20px',
            borderLeft: '1px solid black',
            flexBasis: '50%',
            fontFamily: 'Dosis, sans-serif',
            fontSize: '16px',
            alignSelf: 'center'
        }
    }

}

export default MovieItem;