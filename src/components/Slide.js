import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { apiImage } from '../api';

const { width, height } = Dimensions.get('screen');

const Container = styled.View`
  width: ${width}px;
  height: ${height / 3}px;
`;

const Bg = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.7;
`;

const Content = styled.View``;
const Data = styled.View``;

function Slide({ id, title, backgroundImage, votes, overview }) {
  return (
    <Container>
      <Bg source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Data></Data>
      </Content>
    </Container>
  );
}

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
