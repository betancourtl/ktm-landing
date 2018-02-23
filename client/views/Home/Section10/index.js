import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../Section';

const SpecHeading = props => {
  const { title } = props;
  return (
    <h2 className="color-1 spec-heading">
      {title}
    </h2>
  );
};

const Spec = props => {
  const { title, text } = props;
  return (
    <div className="text-uppercase spec">
      <h3 className="color-1">
        {title}
      </h3>
      <h4 className="color-3">
        {text}
      </h4>
    </div>
  );
};

const Section10 = props => {
  return (
    <Section className="section-10">
      <Row>
        <Col xs={12} className="d-inline-flex flex-column align-items-center">
          <div className="section-10-top"/>
          <div className="number-heading">
            <h2 className="color-1 text-uppercase">
              03
            </h2>
            <h2 className="color-3 text-uppercase">
              Main Specs
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <SpecHeading
            title="Engine"
          />
          <Spec
            title="DESIGN"
            text="1-CYLINDER, 4-STROKE ENGINE"
          />
          <Spec
            title="STROKE"
            text="63.4MM"
          />
          <Spec
            title="EMS"
            text="KEIHIN EMS"
          />
          <Spec
            title="PRIMARY DRIVE"
            text="31:76"
          />
          <Spec
            title="DISPLACEMENT"
            text="449.9 CM"
          />
          <Spec
            title="STARTER"
            text="ELECTRIC STARTER"
          />
          <Spec
            title="SECOND GEAR RATIO"
            text="13:48"
          />
          <Spec
            title="BORE"
            text="95 MM"
          />
          <Spec
            title="TRANSMISSION"
            text="4-SPEED"
          />
          <Spec
            title="CLUTCH"
            text="WET,DDS MULTI-DISK-CLUTCH, BREMBO HYDRAULICS"
          />
        </Col>
        <Col xs={6}>
          <SpecHeading
            title="CHASSIS"
          />
          <Spec
            title="FRAME DESIGN"
            text="25CRM04 STEEL CENTRAL-TUBE FRAME"
          />
          <Spec
            title="SUSPENSION TRAVEL (FRONT)"
            text="310 MM"
          />
          <Spec
            title="REAR BRAKE"
            text="DISK BRAKE"
          />
          <Spec
            title="CHAIN"
            text="5/8 X 1/4"
          />
          <Spec
            title="GROUND CLEARANCE"
            text="370 MM"
          />
          <Spec
            title="WEIGHT READY TO RACE"
            text="100.3GK"
          />
          <Spec
            title="FRONT SUSPENSION"
            text="WP-USD, AER 48, 48MM"
          />
          <Spec
            title="SUSPENSION TRAVEL (REAR)"
            text="300 MM"
          />
          <Spec
            title="FRONT BRAKE DISC DIAMETER"
            text="260 MM"
          />
          <Spec
            title="STEERING HEAD ANGLE"
            text="63.9 DEG"
          />
          <Spec
            title="SEAT HEIGHT"
            text="960 MM"
          />
          <Spec
            title="REAR SUSPENSION"
            text="WP SHOCK ABSORBER WITH LINKAGE"
          />
          <Spec
            title="FRONT DISK"
            text="DISK BRAKE"
          />
          <Spec
            title="REAR BRAKE DISC DIAMETER"
            text="220 MM"
          />
          <Spec
            title="WHEELBASE"
            text="1485 +- 10MM"
          />
          <Spec
            title="TANK CAPACITY(APPROX)"
            text="7L"
          />
        </Col>
      </Row>
    </Section>
  );
};

Section10.propTypes = {
  children: PropTypes.node,
};

Section10.defaultProps = {};

export default Section10;