import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../Section';
import classnames from 'classnames';

const ProductSection = props => {
  const col1ClassNames = classnames(
    'align-items-center',
    'justify-content-center',
    'd-flex',
    { 'order-1': props.inverse }
  );

  const col2ClassNames = classnames(
    { 'order-0': props.inverse }
  );

  return (
    <Section className={props.className}>
      <Row>
        <Col xs={12} md={6} className={col1ClassNames}>
          <img className="img-fluid" src={props.image} alt="motorcycle part" />
        </Col>
        <Col xs={12} md={6} className={col2ClassNames}>
          <h3 className="color-1 text-uppercase">
            {props.title}
          </h3>
          <p>{props.text}</p>
          {props.children}
        </Col>
      </Row>
    </Section>
  );
};

ProductSection.propTypes = {
  children: PropTypes.node,
};

ProductSection.defaultProps = {};

export default ProductSection;