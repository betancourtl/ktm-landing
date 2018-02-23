import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button2 = ({ children, className, ...props }) => {
  const classNames = classnames('c-btn', 'c-btn-2', className);
  return (
    <button
      {...props}
      className={classNames}
    >
      {children}
    </button>
  );
};

Button2.propTypes = {
  children: PropTypes.node,
};

Button2.defaultProps = {};

export default Button2;