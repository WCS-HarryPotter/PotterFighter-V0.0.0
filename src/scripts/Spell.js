import React, { Component } from 'react';
import './Spell.css';
import Fighter from './Fighter.js';
import ReactDOM from 'react-dom';

class Spell extends Component {
  
  constructor(props){
    super(props)
  }

  

  render() {
    return (
      <div className="spell" id={this.props.house}>
      </div>
    );
  }
}

export default Spell;
