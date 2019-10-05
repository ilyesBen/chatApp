import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from 'config/theme';
import { Container } from 'components';

const Chat = ({ size, color }) => (
  <Container size={size}>
    <Icon size={size - 5} color={color} name="chat" />
  </Container>
);

Chat.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Chat.defaultProps = {
  size: 30,
  color: theme.onPrimary,
};

export default Chat;
