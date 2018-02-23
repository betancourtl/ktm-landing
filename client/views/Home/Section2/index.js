import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../Section';

const Section2 = props => {
  return (
    <Section className="section-2">
      <Row>
        <Col xs={12} className="d-inline-flex flex-column align-items-center">
          <div>
            <h2 className="color-1 text-uppercase">
              01
            </h2>
            <h2 className="color-2 text-uppercase">
              The Build
            </h2>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

Section2.propTypes = {
  children: PropTypes.node,
};

Section2.defaultProps = {};

export default Section2;