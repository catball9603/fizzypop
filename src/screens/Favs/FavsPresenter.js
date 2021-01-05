import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, PanResponder, Animated } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../../api';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  width: 100%;
  height: ${height}px;
  background-color: #212121;
  align-items: center;
`;

const Card = styled.View`
  width: 90%;
  height: 70%;
  position: absolute;
  top: 45px;
`;

const PosterImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const styles = {
  width: '90%',
  height: '70%',
  position: 'absolute',
  top: 45,
};

function FavsPresenter({ results }) {
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((index) => index + 1);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: (evt, { dx, dy }) => {
        if (dx >= 250) {
          Animated.spring(pan, {
            toValue: {
              x: width + 100,
              y: dy,
            },
            useNativeDriver: false,
          }).start(nextCard);
        } else if (dx <= -250) {
          Animated.spring(pan, {
            toValue: {
              x: -width - 100,
              y: dy,
            },
            useNativeDriver: false,
          }).start(nextCard);
        } else {
          Animated.spring(pan, {
            toValue: {
              x: 0,
              y: 0,
            },
            useNativeDriver: false,
          }).start();
        }

        // pan.getTranslateTransform();
      },
    }),
  ).current;

  const rotationValues = pan.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ['-8deg', '0deg', '8deg'],
    extrapolate: 'clamp',
  });

  const secCardOpacity = pan.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.5, 1],
    extrapolate: 'clamp',
  });

  const secCardScale = pan.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  });
  // setInterval(() => {
  //   console.log(rotationValues);
  // }, 5000);

  useEffect(() => {
    pan.setValue({ x: 0, y: 0 });
  }, [topIndex]);

  return (
    <Container>
      {results.map((result, index) => {
        if (index < topIndex) {
          return null;
        } else if (index === topIndex) {
          return (
            <Animated.View
              key={result.id}
              style={{
                ...styles,
                zIndex: 1,
                transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate: rotationValues }],
              }}
              {...panResponder.panHandlers}
            >
              <PosterImage source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              key={result.id}
              style={{
                ...styles,
                zIndex: -index,
                opacity: secCardOpacity,
                transform: [{ scale: secCardScale }],
              }}
              {...panResponder.panHandlers}
            >
              <PosterImage source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={result.id}
              style={{
                ...styles,
                zIndex: -index,
                opacity: 0,
                // transform: [{ translateX: pan.x }, { translateY: pan.y }],
              }}
              {...panResponder.panHandlers}
            >
              <PosterImage source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
}
export default FavsPresenter;
