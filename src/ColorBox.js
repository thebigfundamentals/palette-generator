import React, { Component } from 'react';
import chroma from 'chroma-js';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    handleBoxClick = () => {
        this.props.newColor(this.props.id)
    }
    handleNameClick = (e) => {
        e.stopPropagation();
        this.props.copyColorCode(this.props.id)
    }
    render() {
        const {color, isCopied} = this.props;
        const isLightColor = chroma(color).luminance() >= 0.6;
        return ( 
            <div className="ColorBox" style={{backgroundColor: color}} onClick={this.handleBoxClick}>
                <div className={`ColorBox-ColorName ${isLightColor && 'dark-text'}`} onClick={this.handleNameClick}>
                    {isCopied ? 'Copied!' : color}
                </div>
            </div>
         );
    }
}
 
export default ColorBox;