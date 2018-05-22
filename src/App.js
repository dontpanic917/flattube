import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import Filter from './Components/Filter';
import './App.css';

class App extends Component {

  state = {
    shows: []
  }
  componentDidMount(){
    Adapter.getShows().then( resp =>
      this.setState({
        shows: resp
      })
    )
  }
  render = () => {
    console.log(this.state.shows)
    return (
      <div className="App">
          <Filter shows={this.state.shows}/>
        <TVShowList shows={this.state.shows}/>
      </div>
    );
  }
}

export default App;
