import React from 'react';
import PropTypes from 'prop-types';

const Menu = () => {
  return (
    <div className="hamburger-wrapper">
      <p className="color-2 hamburger-wrapper-text">Menu</p>
      <div className="hamburger">
        <span className="hamburger-stripe" />
        <span className="hamburger-stripe" />
        <span className="hamburger-stripe" />
      </div>
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
};

Menu.defaultProps = {};

export default Menu;