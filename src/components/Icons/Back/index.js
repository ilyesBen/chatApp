import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from 'config/theme';
import { Container } from 'components';

const Back = ({ size, color }) => (
  <Container size={size}>
    <Icon size={size - 5} color={color} name="ios-arrow-back" />
  </Container>
);

Back.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Back.defaultProps = {
  size: 30,
  color: theme.onPrimary,
};

export default Back;
