import React, { Component } from 'react';
import Fighter from './Fighter';
import Header from './Header';
//import ReactDOM from 'react-dom';


class Fight extends Component {


    render() {
        return (
            <div>
                <div>
                    <Header
                    />
                </div>
                <div>
                    <Fighter                // Player#1
                        ref="Fighter1"
                        facesRight={true}   // Joueur de gauche
                        attack={87}         // Attaque: w
                        defense={81}        // Défense: q 
                        rotate={65}         // Rotation: a
                        top={69}            // Up: e
                        bottom={68}         // Down: d
                        left={83}           // Left: s
                        right={70}          // Right: f
                        house="hufflepuff"
                    />
                </div>
                <div>
                    <Fighter                // Player#2
                        ref="Fighter2"
                        facesRight={false}  // Joueur de droite
                        attack={17}         // Attaque: Ctrl 
                        defense={223}       // Défense: !
                        rotate={191}        // Rotate: :
                        top={38}            // Up: Flèche du haut
                        bottom={40}         // Down: Flèche du bas
                        left={37}           // Left: Flèche de gauche
                        right={35}          // Right: Flèche de droite
                        house="ravenclaw"
                    />
                </div>    
            </div>
        );
    }
}

export default Fight;
