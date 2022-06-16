import React from 'react';
import { Button } from './Button';

class RandomColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [142, 127, 204] };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  this.setState({
    color: this.chooseColor()
  });
}

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your Colour is {this.formatColor(this.state.color)}
        </h1>
        <Button 
          light={this.isLight()}          
          onClick={this.handleClick} 
        />
      </div>
    );
  }
}

export default RandomColor;