import React, { Component } from 'react'
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color: this.generateColor(),
            isCopied: false
         }
    }
    generateColor = () => {
        let r = this.generateRandomRGB();
        let g = this.generateRandomRGB();
        let b = this.generateRandomRGB();
        return `rgb(${r}, ${g}, ${b})`;
    }
    generateRandomRGB = () => {
        return Math.floor(Math.random() * 256)
    }
    handleBoxClick = () => {
        this.setState({color: this.generateColor()});
    }
    handleNameClick = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(this.state.color);
        this.setState({isCopied: true});
        setTimeout(() => {
            this.setState({isCopied: false});
        }, 500)
    }
    render() { 
        return ( 
            <div className="ColorBox" style={{backgroundColor: this.state.color}} onClick={this.handleBoxClick}>
                <div className="ColorBox-ColorName" onClick={this.handleNameClick}>
                    {this.state.isCopied ? 'Copied!' : this.state.color}
                </div>
            </div>
         );
    }
}
 
export default ColorBox;