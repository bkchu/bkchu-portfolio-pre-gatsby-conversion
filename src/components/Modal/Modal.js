import React, { Component } from 'react';

class Modal extends Component {
  state = {
    open: true
  };

  onOpenHandler = () => {
    this.setState({ open: true });
  };

  onCloseHandler = () => {
    this.setState({ open: false });
  };

  render() {
    return this.state.open ? (
      <div className="Modal">
        <div className="Modal__popup">
          <button onClick={this.onCloseHandler} className="Modal__close">
            CLOSE
          </button>
          {this.props.children}
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
