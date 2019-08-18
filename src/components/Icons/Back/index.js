import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from 'config/theme';

const Back = ({ size, color }) => <Icon size={size} color={color} name="ios-arrow-back" />;

Back.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Back.defaultProps = {
  size: 20,
  color: theme.onPrimary,
};

export default Back;
