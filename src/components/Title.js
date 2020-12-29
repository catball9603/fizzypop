import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TitleText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  margin: 35px 0 20px 15px;
`;

function Title({ title }) {
  return <TitleText>{title}</TitleText>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
