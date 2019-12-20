import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick} className={`btn btn-${this.props.type}`}>
        {this.props.textContent}
      </button>
    );
  }
}

export default Button;
