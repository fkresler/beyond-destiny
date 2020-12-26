import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  ${(props) =>
    props.variant === 'positive' &&
    `
    background-color: #A1FFAA;
    color: #000;
    border: 1px solid #02640C;
  `}

  ${(props) =>
    props.variant === 'negative' &&
    `
    background-color: #FF7B7B;
    color: #000;
    border: 1px solid #940000;
  `}
`;

const Feedback = ({ title, children, variant }) => (
  <Wrapper variant={variant}>
    <div>Icon</div>
    <div>
      {title}
      {children}
    </div>
  </Wrapper>
);

export default Feedback;

Feedback.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
  variant: PropTypes.oneOf(['positive', 'negative', 'neutral']),
};

Feedback.defaultProps = {
  children: false,
  title: false,
  variant: 'neutral',
};
