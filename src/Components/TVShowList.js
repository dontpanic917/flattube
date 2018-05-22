import React, { Component } from 'react';
import TvShow from './tvShow'
class TVShowList extends Component {

  renderTvShow = () => {
  return this.props.shows.map(show => {
      return <TvShow show={show}/>
    })
  }
  render() {
    return (
      <div className="tvShowList">
        {this.renderTvShow()}
      </div>
    );
  }

}

export default TVShowList;
