import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';

class App extends React.Component {
  state = {
    movies: [
      {
        "_id": "5c3c5d6ddc1ddd0574c9dbec",
        "name": "Aquaman",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit cursus lacus id malesuada. Sed dignissim, neque eu vestibulum tristique, ante metus luctus elit, eget sollicitudin enim mi nec erat.",
        "minAge": 18,
        "poster": "https://i.redd.it/mioxrsm1sma11.jpg",
        "__v": 0
      },
      {
        "_id": "5c3c5d6ddcsdfdd0574c9dbed",
        "name": "Groundman",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit cursus lacus id malesuada. Sed dignissim, neque eu vestibulum tristique, ante metus luctus elit, eget sollicitudin enim mi nec erat.",
        "minAge": 12,
        "poster": "https://i.redd.it/mioxrsm1sma11.jpg",
        "__v": 0
      },
      {
        "_id": "5c3c5d6ddc1ddvf574c9dbee",
        "name": "Ant-Man",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit cursus lacus id malesuada. Sed dignissim, neque eu vestibulum tristique, ante metus luctus elit, eget sollicitudin enim mi nec erat.",
        "minAge": 10,
        "poster": "https://i.redd.it/mioxrsm1sma11.jpg",
        "__v": 0
      },
      {
        "_id": "5c3c5d6ddc1ddd0574c9dbf",
        "name": "Just-Man",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit cursus lacus id malesuada. Sed dignissim, neque eu vestibulum tristique, ante metus luctus elit, eget sollicitudin enim mi nec erat.",
        "minAge": 5,
        "poster": "https://i.redd.it/mioxrsm1sma11.jpg",
        "__v": 0
      },
      {
        "_id": "5c3c5d6ddc1ddd0574c9deg",
        "name": "Wo-Men",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit cursus lacus id malesuada. Sed dignissim, neque eu vestibulum tristique, ante metus luctus elit, eget sollicitudin enim mi nec erat.",
        "minAge": 18,
        "poster": "https://i.redd.it/mioxrsm1sma11.jpg",
        "__v": 0
      }
    ]
  }

  //Zbiera response i wkłada go wewnątrz tabeli w state.movies
  // componentDidMount() {
  //   axios.get('http://localhost:4500/movies')
  //     .then(res => this.setState({ movies: res.data }))
  // }

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
