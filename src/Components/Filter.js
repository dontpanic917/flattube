import React, { Component } from 'react';
import {Input, Row} from 'react-materialize'

class Filter extends Component {

  //Returns a list of show types (How can we use this for a filter?)
  listOfShowTypes = () => {
    return this.props.shows.map((s)=> {
      return s.type
    }).unique()
  }

  render = () => {
    const typeMap = () => {
      return this.listOfShowTypes().map(type => {
        return <option value={type}> {type} </option>
      })
    }
    console.log(this.listOfShowTypes().map(type => {
      return <option value={type}> {type} </option>
    }))
    return (

      <div className="filter">
        <button onClick={()=>console.log('blah')}>blah</button>
        <Row>
        <Input s={12} type='select' label="Materialize Select">
          {typeMap()}
        </Input>
      </Row>
      </div>
    );
  }
}

export default Filter;



Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
      if(!arr.includes(this[i])) {
          arr.push(this[i]);
      }
  }
  return arr;
}
