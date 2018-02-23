import React from 'react';
import PropTypes from 'prop-types';
import ProductSection from '../ProductSection';
import transmission from '../../../assets/part-4.jpg';

const Section6 = props => {
  return (
    <ProductSection
      inverse
      image={transmission}
      title="Transmission"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus."
      className="section-6"
    />
  );
};

Section6.propTypes = {
  children: PropTypes.node,
};

Section6.defaultProps = {};

export default Section6;