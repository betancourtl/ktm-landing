import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button3 = props => {
  const className = classnames('c-btn', 'c-btn-3', props.className);

  return (
    <button className={className}>
      {props.children}
    </button>
  );
};

Button3.propTypes = {
  children: PropTypes.node,
};

Button3.defaultProps = {};

export default Button3;