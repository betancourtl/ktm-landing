import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../Section';

const Section8 = props => {
  return (
    <Section className="section-8">
      <Row>
        <Col xs={12} className="d-inline-flex flex-column align-items-center">
          <div>
            <h2 className="color-1 text-uppercase">
              02
            </h2>
            <h2 className="color-2 text-uppercase">
              360 view
            </h2>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

Section8.propTypes = {
  children: PropTypes.node,
};

Section8.defaultProps = {};

export default Section8;