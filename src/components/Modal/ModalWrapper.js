import React from 'react';

const ModalWrapper = props => {
  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) props.hideModal();
  };

  const onOk = () => {
    props.onOk();
    props.hideModal();
  };

  const okButton = props.showOk ? (
    <button
      className="Modal__button--ok"
      onClick={onOk}
      disabled={props.okDisabled}
    >
      {props.okText}
    </button>
  ) : null;

  return (
    <div className="Modal" onClick={handleBackgroundClick}>
      <div className="Modal__content">
        <header className="Modal__header">
          <button className="Modal__button--hide" onClick={props.hideModal}>
            CLOSE
          </button>
        </header>
        <div>{props.children}</div>

        {okButton}
      </div>
    </div>
  );
};

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  onOk: () => {}
};

export default ModalWrapper;
