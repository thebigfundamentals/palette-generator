import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './PaletteBox.css';

class PaletteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {id: this.randomKey(),
                color: this.RGBToHex(this.generateColor()),
                isCopied: false},
                {id: this.randomKey(),
                color: this.RGBToHex(this.generateColor()),
                isCopied: false},
                {id: this.randomKey(),
                color: this.RGBToHex(this.generateColor()),
                isCopied: false},
                {id: this.randomKey(),
                color: this.RGBToHex(this.generateColor()),
                isCopied: false},
                {id: this.randomKey(),
                color: this.RGBToHex(this.generateColor()),
                isCopied: false},
            ] 
         }
    }
    randomKey = () => {
            return '_' + Math.random().toString(36).substring(2, 9);
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
    newColor = (id) => {
        const updatedColors = this.state.colors.map(el => el.id === id ? 
            {...el, color: this.RGBToHex(this.generateColor())} : el);
        this.setState({colors: updatedColors});
    }
    copyColorCode = (id) => {
        const selectedColor = this.state.colors.find(el => el.id === id);
        const colorIndex = this.state.colors.findIndex(el => el.id === id);
        navigator.clipboard.writeText(selectedColor.color)
        this.setState((st) => {
            st.colors[colorIndex].isCopied = true;
            return {colors: st.colors}
        })
        setTimeout(() => {
            this.setState((st) => {
                st.colors[colorIndex].isCopied = false;
                return {colors: st.colors}
            })
        }, 500)
    }
    render() { 
        return ( 
            <div className="PaletteBox">
            {this.state.colors.map((el) => <ColorBox 
            key={el.id}
            id={el.id}
            color={el.color}
            isCopied={el.isCopied}
            newColor={this.newColor}
            copyColorCode={this.copyColorCode}
            />)}
            </div>
         );
    }
}
 
export default PaletteBox;