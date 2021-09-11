import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './PaletteBox.css';

class PaletteBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    randomKey = () => {
            return '_' + Math.random().toString(36).substring(2, 9);
    }
    render() { 
        return ( 
            <div className="PaletteBox">
            {[...Array(5)].map((e, i) => <ColorBox key={this.randomKey()}/>)}
            </div>
         );
    }
}
 
export default PaletteBox;