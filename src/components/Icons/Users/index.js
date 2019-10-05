import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'config/theme';
import { Container } from 'components';

const Users = ({ size, color }) => (
  <Container size={size}>
    <Icon size={size - 5} color={color} name="users" />
  </Container>
);

Users.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Users.defaultProps = {
  size: 30,
  color: theme.onPrimary,
};

export default Users;
