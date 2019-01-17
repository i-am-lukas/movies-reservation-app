import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';

class App extends React.Component {
  state = {
    movies: []
  }

  // Zbiera response i wkłada go wewnątrz tabeli w state.movies
  componentDidMount() {
    axios.get('http://localhost:4500/movies')
      .then(res => this.setState({ movies: res.data.movies }))
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <div className="moviesContainer">
            <Movies movies={this.state.movies}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
