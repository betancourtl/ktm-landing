import React from 'react';
import PropTypes from 'prop-types';
import ProductSection from '../ProductSection';
import engineCase from '../../../assets/part-3.jpg';

const Section5 = props => {
  return (
    <ProductSection
      image={engineCase}
      title="Engine Case and Covers"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus."
      className="section-5"
    />
  );
};

Section5.propTypes = {
  children: PropTypes.node,
};

Section5.defaultProps = {};

export default Section5;