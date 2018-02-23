import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../Section';
import Logo from '../../../assets/logo-2.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagram,
} from '@fortawesome/fontawesome-free-brands';

const Footer = props => {
  return (
    <Section className="footer">
      <Row>
        <Col xs={2} className="d-flex  align-items-center">
          <img className="footer-logo img-fluid" src={Logo} alt="" />
        </Col>

        <Col xs={8} className="d-flex  align-items-center">
          <ul className="footer-nav">
            <li className="footer-nav-item">Home</li>
            <li className="footer-nav-item">Contact</li>
            <li className="footer-nav-item">Imprint</li>
            <li className="footer-nav-item">Privacy Policy</li>
            <li className="footer-nav-item">Legal</li>
            <li className="footer-nav-item">Press</li>
            <li className="footer-nav-item">Images</li>
            <li className="footer-nav-item">Become a Dealer</li>
          </ul>
        </Col>

        <Col xs={2} className="d-flex  align-items-center">
          <ul className="footer-icons">
            <li className="footer-icon">
              <FontAwesomeIcon className="color-4" icon={faFacebookSquare} />
            </li>
            <li className="footer-icon">
              <FontAwesomeIcon className="color-5" icon={faTwitterSquare} />
            </li>
            <li className="footer-icon">
              <FontAwesomeIcon className="color-3" icon={faInstagram} />
            </li>
            <li className="footer-icon">
              <FontAwesomeIcon className="color-6" icon={faYoutubeSquare} />
            </li>
          </ul>
        </Col>
      </Row>
    </Section>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {};

export default Footer;
