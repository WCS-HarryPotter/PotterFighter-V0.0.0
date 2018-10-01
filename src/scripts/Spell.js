import React, { Component } from 'react';
import './Spell.css';

class Spell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leftSpell: 0,
      topSpell: 0,
    }
  }

  componentWillMount(){
    this.setState({
      leftSpell:250+"px",
      topSpell:75+"px",
    })
  }

  componentDidMount(){
    console.log(this.state.leftSpell)
    this.returnPosition();
  }

  returnPosition(){
    this.props.callBack(this.state.leftSpell);
  }
  
  render() {
    let spellStyle={
      position: "absolute",
      top: this.state.topSpell,
      left: this.state.leftSpell
    }
    return (
      <div className="spell" id={this.props.house} ref={"spell"} style={spellStyle}>
      </div>
    );
  }
}

export default Spell;
