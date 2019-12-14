import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Badge } from 'native-base';
import { currentUser } from 'constants';
import API, { graphqlOperation } from '@aws-amplify/api';
import * as subscriptions from 'graphqlApi/subscriptions';
import theme from 'config/theme';

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    flex: 1,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.onSurface,
  },
  lastMessageText: {
    fontSize: 12,
    fontWeight: '300',
    color: theme.onSurfaceVariant,
  },
});

class ConvsList extends React.Component {
  renderItem = user => {
    const { navigation } = this.props;
    const { item } = user;
    const subscribeToCreateMessage = API.graphql(
      graphqlOperation(subscriptions.onCreateMessageByAuthorId, {
        authorId: item.id,
      })
    );

    subscribeToCreateMessage.subscribe({
      next: eventData => console.log('event from subscription ', eventData),
    });
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('Chat', { user: item })}
        underlayColor={theme.disabled}
      >
        <View justifyContent="space-around" flexDirection="row" alignItems="center">
          <View style={styles.itemContainer}>
            <Image style={styles.avatar} source={{ uri: item.avatar }} resizeMode="cover" />
            <View flexDirection="column">
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.lastMessageText}>
                {currentUser.id === item.lastMessage.authorId
                  ? `You: ${item.lastMessage.text}`
                  : item.lastMessage.text}
              </Text>
            </View>
          </View>
          <Badge
            style={{
              margin: 10,
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>2</Text>
          </Badge>
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

ConvsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ConvsList;
