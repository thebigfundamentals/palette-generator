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
        return `rgb(${r},${g},${b})`;
    }
    generateRandomRGB = () => {
        return Math.floor(Math.random() * 256)
    }
    RGBToHex = (rgb) => {
        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        // Turn "rgb(r,g,b)" into [r,g,b]
        rgb = rgb.substr(4).split(")")[0].split(sep);
      
        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);
      
        if (r.length === 1)
          r = "0" + r;
        if (g.length === 1)
          g = "0" + g;
        if (b.length === 1)
          b = "0" + b;
      
        return `#${r}${g}${b}`.toUpperCase();
    }
    handleBoxClick = () => {
        this.setState({color: this.generateColor()});
    }
    handleNameClick = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(this.RGBToHex(this.state.color));
        this.setState({isCopied: true});
        setTimeout(() => {
            this.setState({isCopied: false});
        }, 500)
    }
    render() { 
        return ( 
            <div className="ColorBox" style={{backgroundColor: this.state.color}} onClick={this.handleBoxClick}>
                <div className="ColorBox-ColorName" onClick={this.handleNameClick}>
                    {this.state.isCopied ? 'Copied!' : this.RGBToHex(this.state.color)}
                </div>
            </div>
         );
    }
}
 
export default ColorBox;