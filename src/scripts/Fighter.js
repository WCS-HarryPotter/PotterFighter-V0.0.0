import React, { Component } from 'react';
import './Fighter.css';
import Spell from './Spell';
//import ReactDOM from 'react-dom';


class Fighter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyPressed: false,
      rotation: 0,
      facesRight: true,
      top:250,
      left:100,
      size:{},
      life:100
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.fighter = React.createRef();
  }

  handleKeyPress(event) {
  //  console.log("Appui touche");
    if (event.which === this.props.attack) {
      this.castSpell()
    }
  }
  
  castSpell() {
    this.setState({
      keyPressed: true,
    })
    setTimeout(()=>{
      this.setState({
        keyPressed: false,
      })
    },2000)
  }

  componentWillMount(){
    this.state.facesRight=this.props.facesRight;

    if(!this.props.facesRight) {
      this.state.rotation=180;
      this.state.left=1100;
    }
    else {
      this.state.rotation=0;
      this.state.left=100;
    }


  }
  // POUR DISCUSSION
  /*componentWillMount(){
    this.setState({
      facesRight:this.props.facesRight,

      if(facesRight) {rotation:180},
      else {rotation:0}
    })
  }*/

  getPosition(){
    this.setState({
      size:this.refs.fighter.getClientRects()

    })
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  // CAS 3: IDEM CAS 2
  //  this.getPosition();
  /* CAS 2: ERREUR: PAS DE SETSTATE DANS DIDUPDATE "TO PREVENT INFINITE LOOP"  
    this.setState({
      size:this.refs.fighter.getClientRects()

    })*/
  //CAS 1: FONCTIONNEL mais impropre : usage de setState recommandé
    this.state.size = this.refs.fighter.getClientRects();
  }

  componentDidUpdate() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  // CAS 3: IDEM CAS 2
  //  this.getPosition();
  /* CAS 2: ERREUR: pas de setstate dans DidUpdate "to prevent infinite loop" 
    this.setState({
      size:this.refs.fighter.getClientRects()

    })*/
  //CAS 1: FONCTIONNEL mais impropre : usage de setState recommandé
    this.state.size = this.refs.fighter.getClientRects();  
  }

  spellPositionCallback(spellPosition){
    console.log("Left spel position :"+spellPosition)
  }

  render() {
    let fighterStyle = {
      transform: `rotateY(${this.state.rotation}deg)`,
      position: "absolute",
      top: this.state.top,
      left: this.state.left
    };

    return (
      <div>
        <div className="wizard" ref={"fighter"} style={fighterStyle} >
          <div>{
            this.state.keyPressed ?
              <Spell 
                house={this.props.house}
                direction={this.state.facesRight}
                size={this.state.size}
                callBack={this.spellPositionCallback}
              />
              :
              <div></div>
          }</div>
        </div>
      </div>
    );
  }
}

export default Fighter;
