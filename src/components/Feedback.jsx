import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;

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

const Headline = styled.div`
  display: block;
  font-weight: bold;
`;

const Content = styled.div`
  display: block;
  margin-top: 1rem;
`;

const Feedback = ({ title, children, variant }) => (
  <Wrapper variant={variant}>
    {title && <Headline>{title}</Headline>}
    {children && <Content>{children}</Content>}
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
