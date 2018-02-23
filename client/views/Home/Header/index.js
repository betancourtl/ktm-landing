import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../Section';
import Menu from '../Menu';
import logo from '../../../assets/logo.png';

const Header = props => {
  return (
    <Section className="header">
      <Row>
        <Col xs={12} className="d-flex justify-content-between">
          <img src={logo} alt="logo" />
          <Menu />
        </Col>
      </Row>
    </Section>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {};

export default Header;
