import React, { Component } from 'react'
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
        return ( 
            <div className="ColorBox" style={{backgroundColor: this.props.color}} onClick={this.handleBoxClick}>
                <div className="ColorBox-ColorName" onClick={this.handleNameClick}>
                    {this.props.isCopied ? 'Copied!' : this.props.color}
                </div>
            </div>
         );
    }
}
 
export default ColorBox;