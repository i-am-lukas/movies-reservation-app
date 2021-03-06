import React from 'react';
import axios from 'axios';
import Sessions from './Sessions';
import Seats from './Seats';

class MovieItem extends React.Component {
    state = {
        movie: [],
        sessions: [],
        styling: {},
        seats: [],
        renderSeats: false,
        sessionId: ''
    }

    render() {
        return (
            <div className="whole-movie-div" style={this.wholeMovieDiv()} onClick={this.getSessions}>
                    <div className="movie-content-div" style={{display: 'flex', flexBasis: '100%'}}>
                        <img className="image-style" src={this.props.movie.poster} style={this.imageStyle()} alt='opis zdjecia'  />
                        <div style={this.name()}>
                            <div className="movie-name" style={this.movieName()}>{this.props.movie.name}</div>
                        </div>
                        <div className="movie-description" style={ this.description() }>
                            <span style={{ fontSize: '20px', fontWeight: '800' }}> Description: </span>
                            <br /> <br />
                            {this.props.movie.description}
                            <div style={this.requiredAge()}>Required age: {this.props.movie.minAge}</div>
                        </div> 
                    </div>
                    <div style={{ flexBasis: '100%'}}>
                        <Sessions sessions={this.state.sessions} styling={this.state.styling} seats={this.seats}/>
                        <div>{this.renderSeats()}</div>
                    </div>
            </div>
        )
    }

    renderSeats = () => {
        if (this.state.renderSeats) return (
            <React.Fragment>
                <div style={{borderBottom: 'black solid 1px', width: 'auto'}}></div>
                <Seats seats={this.state.seats} sessionId={this.state.sessionId}/>
            </React.Fragment>)
    }

    seats = (id) => {
        this.setState({renderSeats: true, sessionId: id})
        axios.get(`http://localhost:4500/seats/${id}`)
            .then(res => this.setState({seats: res.data.session.seats}))
    }

    getSessions = (prevProps) => {
        const dateContainerStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            borderTop: '1px black solid',
            margin: '20px',
            flexWrap: 'wrap'
        }

        if(prevProps !== this.state.sessions)
        axios.get(`http://localhost:4500/movies/${this.props.movie._id}`)
            .then(res => this.setState({ movie: res.data.movie, sessions: res.data.session }))
            .then(this.setState({styling: dateContainerStyle}))

        
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
            // justifyContent: 'space-around',
            flexWrap: 'wrap'
        }
    }

    name = () => {
        return {
            display: 'flex', 
            justifyContent: 'space-around',
            paddingRight: '20px',
            flexBasis: '20%', 
            flexShrink: '0'
        }
    }

    imageStyle = () => {
        return {
            height: '170px',
            width: '120px',
            margin: '0 20px',
            flexBasis: 'auto',
            alignSelf: 'center',
            border: '1px solid black',
            flexShrink: '0'
        }
    }

    movieName = () => {
        return {
            fontSize: '36px',
            fontFamily: 'Roboto Mono, monospace',
            letterSpacing: '1px',
            lineHeight: '36px',
            wordSpacing: '-10px', 
            alignSelf: 'center',
        }
    }

    description = () => {
        return {
            textAlign: 'left',
            padding: '20px',
            borderLeft: '1px solid black',
            flexBasis: 'auto',
            fontFamily: 'Dosis, sans-serif',
            fontSize: '16px',
            alignSelf: 'center',
            flexGrow: '2'
        }
    }

    requiredAge = () => {
        return {
            paddingTop: '5px'
        }
    }
}

export default MovieItem;