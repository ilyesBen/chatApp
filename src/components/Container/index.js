import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Container = ({ children, size, backgroundColor }) => (
  <View
    style={[
      styles.container,
      { height: size, width: size, borderRadius: size / 2, backgroundColor },
    ]}
  >
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
};

Container.defaultProps = {
  size: 50,
  backgroundColor: 'transparent',
};

export default Container;
