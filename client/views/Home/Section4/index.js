import React from 'react';
import PropTypes from 'prop-types';
import ProductSection from '../ProductSection';
import ems from '../../../assets/part-2.jpg';

const Section4 = props => {
  return (
    <ProductSection
      inverse
      image={ems}
      title="Engine Management System"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus."
      className="section-4"
    />
  );
};

Section4.propTypes = {
  children: PropTypes.node,
};

Section4.defaultProps = {};

export default Section4;