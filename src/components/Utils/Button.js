import React, { Component } from "react";

class Button extends Component {
  render() {
    const { handleClick, type, textContent } = this.props;

    return (
      <button onClick={handleClick} className={`btn btn-${type}`}>
        {textContent}
      </button>
    );
  }
}

export default Button;
