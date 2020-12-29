import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { apiImage } from '../api';

const PosterImage = styled.Image`
  width: 105px;
  height: 160px;
  border-radius: 5px;
  background-color: #000;
`;

function Poster({ url }) {
  return <PosterImage source={{ uri: apiImage(url) }} />;
}

Poster.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Poster;
