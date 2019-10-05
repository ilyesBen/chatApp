import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from 'config/theme';
import { Icons } from 'components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    padding: 5,
    backgroundColor: theme.primary,
    shadowColor: theme.onPrimaryVariant,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    elevation: 3,
    shadowRadius: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    color: theme.onPrimary,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});

const Header = ({ onBackPress, title }) => (
  <View justifyContent={onBackPress ? 'space-between' : 'center'} style={styles.container}>
    <TouchableOpacity onPress={onBackPress}>
      {onBackPress && (
        <View style={styles.iconContainer}>
          <Icons.Back />
        </View>
      )}
    </TouchableOpacity>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>

    {onBackPress && <View visibility="hidden" style={styles.iconContainer} />}
  </View>
);

Header.propTypes = {
  title: PropTypes.string,
  onBackPress: PropTypes.func,
};

Header.defaultProps = {
  title: '',
  onBackPress: null,
};

export default Header;
