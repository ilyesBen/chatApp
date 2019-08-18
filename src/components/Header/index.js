import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from 'config/theme';
import { Icons } from 'components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: theme.primary,
    padding: 10,
    shadowColor: theme.onPrimaryVariant,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    elevation: 3,
    shadowRadius: 5,
  },
  backButton: {},
  title: {
    color: theme.onPrimaryVariant,
  },
});

const Header = ({ onBackPress, title }) => (
  <View style={styles.container}>
    {onBackPress && (
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Icons.Back />
      </TouchableOpacity>
    )}
    <Text style={styles.title}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string,
  onBackPress: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  onBackPress: null,
};

export default Header;
