import React, { Component } from 'react';

const ModalHOC = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div className="Modal">
          <WrappedComponent {...props}/>
        </div>
      )
    }
  }
}

export default ModalHOC;