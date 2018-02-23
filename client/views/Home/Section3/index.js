import React from 'react';
import PropTypes from 'prop-types';
import ProductSection from '../ProductSection';
import engine from '../../../assets/part-1.jpg';

const Section3 = props => {
  return (
    <ProductSection
      image={engine}
      title="Engine"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus."
      className="section-3"
    />
  );
};

Section3.propTypes = {
  children: PropTypes.node,
};

Section3.defaultProps = {};

export default Section3;