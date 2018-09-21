import React, { Component } from 'react';

class ModalWrapper extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const handleBackgroundClick = e => {
      if (e.target === e.currentTarget) this.props.hideModal();
    };

    const onOk = () => {
      this.props.onOk();
      this.props.hideModal();
    };

    const okButton = this.props.showOk ? (
      <button
        className="Modal__button--ok"
        onClick={onOk}
        disabled={this.props.okDisabled}
      >
        {this.props.okText}
      </button>
    ) : null;

    return (
      <div className="Modal" onClick={handleBackgroundClick}>
        <div className="Modal__content">
          <header className="Modal__header">
            <button
              className="Modal__button--hide"
              onClick={this.props.hideModal}
            >
              CLOSE
            </button>
          </header>
          <div>{this.props.children}</div>

          {okButton}
        </div>
      </div>
    );
  }
}

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  onOk: () => {}
};

export default ModalWrapper;
