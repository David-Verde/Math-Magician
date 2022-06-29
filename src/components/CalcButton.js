import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CalcButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { buttonName, onClick, calcObj } = this.props;
    onClick(calcObj, buttonName);
  }

  render() {
    const { classButton, buttonName } = this.props;
    return (
      <button type="button" className={classButton} onClick={this.handleClick}>{buttonName}</button>
    );
  }
}

CalcButton.defaultProps = {
  buttonName: '?',
  classButton: 'whiteButton',
};

CalcButton.propTypes = {
  buttonName: PropTypes.string,
  classButton: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  calcObj: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CalcButton;
