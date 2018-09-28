import React, { Component } from 'react';
import './App.css';
import Spell from './scripts/Spell';
import Fighter from './scripts/Fighter';
import Char from'./scripts/Char';

/*let dragoMalefoy=new Char({
  house:"serpentard",
  name:"Drago Malefoy"
});*/

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      enterKeyPressed: false
    }
    this.handleKeyPress=this.handleKeyPress.bind(this);
    
    this.house="";

    this.fighter1=React.createRef();
  }

  handleKeyPress(event){
    if(event.which === 17) { //17 = ControlRight
      this.setState({
        enterKeyPressed:true,
        house:"serpentard"
      })
    }
    if(event.which === 16) { // 16: Switch
      this.setState({
        enterKeyPressed:true,
        house:"gryffondor"
      })
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentDidUpdate() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return (
      <div className="App">
        <div ref={this.fighter1}>
          <Fighter/>
        </div>
        <div>{
          this.state.enterKeyPressed?

          <Spell
            //house="serpentard"
            house={this.state.house}
            node={this.fighter1.current}
          />
          :
          <div></div>
        }</div>
      </div>
    );
  }

  castSpell(house){
    console.log("Spell will be cast")
  }

  /*handleKeyPress = (event) => {
    if(event.key==="Enter"){
      alert("Enter key is pressed");
    }
  }*/
}

export default App;