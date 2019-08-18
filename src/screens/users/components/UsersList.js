import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
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
  lastMessageText: {
    fontSize: 11,
    fontWeight: '200',
    color: 'grey',
  },
});

class UsersList extends React.Component {
  renderItem = user => {
    const { navigation } = this.props;
    const { item } = user;
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('Chat', { user: item })}
        underlayColor="#D3D3D3"
      >
        <View style={styles.itemContainer}>
          <Image style={styles.avatar} source={{ uri: item.avatar }} resizeMode="cover" />
          <View flexDirection="column">
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const { users } = this.props;
    return (
      <FlatList data={users} renderItem={this.renderItem} keyExtractor={user => `${user.id}}`} />
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default UsersList;
