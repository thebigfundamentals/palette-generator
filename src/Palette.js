import React, { Component } from 'react'
import PaletteBox from './PaletteBox';
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reRendered: 0
        }
    }
    handleNewPalette = () => {
        this.setState((curState) => ({
            reRendered: ++curState.reRendered
        }))
    }
    randomKey = () => {
        return '_' + Math.random().toString(36).substring(2, 9);
}
    render() { 
        return ( 
            <div className="Palette">
            <h1>Palette Generator</h1>
            <PaletteBox key={this.randomKey()}/>
            <button className="button-6" onClick={this.handleNewPalette}>Generate a new random palette</button>
            </div>
         );
    }
}
 
export default Palette;