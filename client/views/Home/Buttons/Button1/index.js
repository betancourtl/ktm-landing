import React from 'react';
import PropTypes from 'prop-types';

const Button1 = props => {
  return (
    <button className="c-btn c-btn-1">
      {props.children}
    </button>
  );
};

Button1.propTypes = {
  children: PropTypes.node,
};

Button1.defaultProps = {};

export default Button1;