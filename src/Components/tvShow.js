import React from 'react';
import {Card, Col, CardTitle} from 'react-materialize'

class tvShow extends React.Component {
  state = {
      clicked: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }



  render(){
   const clickedRender = () => {return (<Col m={6} s={12}>
      <Card title={this.props.show.name} onClick={this.handleClick}>
        <p>{this.props.show.season}</p>
      </Card>
    </Col>)}
   const defaultRender = () => {return (<Col m={6} s={12}>
      <Card title={this.props.show.name} onClick={this.handleClick}>
        <p><a href={this.props.show.url}>This is a link</a></p>
      </Card>
    </Col>)}

    return (
      [this.state.clicked ? defaultRender() : clickedRender()]

    );
  }


}

export default tvShow;
