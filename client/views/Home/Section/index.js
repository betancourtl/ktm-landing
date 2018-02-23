import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const Section = props => {
  return (
    <Container fluid className={props.className}>
      <Container>
        {props.children}
      </Container>
    </Container>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

Section.defaultProps = {
  classNames: null,
};

export default Section;
