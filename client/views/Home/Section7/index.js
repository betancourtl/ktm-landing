import React from 'react';
import PropTypes from 'prop-types';
import ProductSection from '../ProductSection';
import frame from '../../../assets/part-5.jpg';
import Button3 from "../Buttons/Button3";

const Section7 = props => {
  return (
    <ProductSection
      image={frame}
      title="Frame"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga natus nesciunt odio, placeat sint ut! Aliquam aut cumque deserunt ducimus ea harum impedit iusto maiores minima placeat tempore, temporibus."
      className="section-7"
    >
      <Button3 className="section-7-btn">
        View More
      </Button3>
    </ProductSection>
  );
};

Section7.propTypes = {
  children: PropTypes.node,
};

Section7.defaultProps = {};

export default Section7;