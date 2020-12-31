import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

function HorizontalSlider({ children }) {
  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false} style={{ marginLeft: 10 }}>
      {children}
    </ScrollView>
  );
}

HorizontalSlider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
