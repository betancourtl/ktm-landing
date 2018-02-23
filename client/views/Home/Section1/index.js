import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../Section';
import Button1 from '../Buttons/Button1';
import Button2 from '../Buttons/Button2';

const Section1 = props => {
  return (
    <Section className="section-1">
      <Row>
        <Col xs={12} md={8} className="justify-content-center d-flex flex-column">
          <h1 className="color-1 text-uppercase">
            KTM 450 xs-f
          </h1>
          <h1 className="color-3 text-uppercase">
            Drop the Hammer.
          </h1>
        </Col>
        <Col xs={12} className="">
          <Button2 className="section-1-btn">
            Find Dealers near you!
          </Button2>
        </Col>
      </Row>
    </Section>
  );
};

Section1.propTypes = {
  children: PropTypes.node,
};

Section1.defaultProps = {};

export default Section1;