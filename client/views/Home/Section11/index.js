import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../Section';
import Button1 from "../Buttons/Button2";

const Section11 = props => {
  return (
    <Section className="section-11">
      <Row>
        <Col xs={12} className="text-center">
          <h1 className="color-2 section-11-heading">
            7,299.00 GBP
          </h1>

          <p className="section-11-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            perspiciatis, repellendus? Adipisci at culpa, cupiditate dolores enim eos et,
            eveniet excepturi harum in magni natus possimus, quasi recusandae repellat
            veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            perspiciatis, repellendus? Adipisci at culpa, cupiditate dolores enim eos et,
            eveniet excepturi harum in magni natus possimus, quasi recusandae repellat
            veniam.
          </p>

          <Button1>
            Find Dealers near you!
          </Button1>
        </Col>
      </Row>
    </Section>
  );
};

Section11.propTypes = {
  children: PropTypes.node,
};

Section11.defaultProps = {};

export default Section11;