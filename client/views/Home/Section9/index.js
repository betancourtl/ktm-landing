import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../Section';
import bike from '../../../assets/bike.png'

const Section9 = props => {
  return (
    <Section className="section-9">
      <Row>
        <Col xs={12}>
          <img  className="img-fluid" src={bike} alt="" />
        </Col>
      </Row>
    </Section>
  );
};

Section9.propTypes = {
  children: PropTypes.node,
};

Section9.defaultProps = {};

export default Section9;