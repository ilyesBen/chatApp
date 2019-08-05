import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.6,
    padding: 10,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
});

class ConvsList extends React.Component {
  renderItem = user => {
    const { navigation } = this.props;
    const { item } = user;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Chat', { user: item })}>
        <View style={styles.itemContainer}>
          <Image style={styles.avatar} source={{ uri: item.avatar }} resizeMode="cover" />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { users } = this.props;
    return (
      <FlatList data={users} renderItem={this.renderItem} keyExtractor={user => `${user.id}}`} />
    );
  }
}

ConvsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ConvsList;
