import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { actions, selectors } from 'modules/Chat';

const { sendMessage } = actions;
const { selectMessages } = selectors;

// test DATA. To be removed
const currentUser = {
  _id: 99,
  name: 'Ana Houwa',
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGqKkt_LRV7co8maLFEvlOH-WzjZriCr6IVqnB4LFTtzvS9Om',
};

class ChatScreen extends React.Component {
  componentDidMount() {}

  render() {
    const { messages, navigation, onSendMessage } = this.props;
    const receiverId = navigation.getParam('user').id;

    return (
      <View flex={1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <GiftedChat
          messages={messages}
          onSend={newMessages => onSendMessage(newMessages[0], receiverId)}
          user={currentUser}
        />
      </View>
    );
  }
}

ChatScreen.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSendMessage: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state, props) => {
  const { navigation } = props;
  const user = navigation.getParam('user');
  return {
    messages: selectMessages(state, user.id, currentUser),
  };
};

const mapDispatchToProps = dispatch => ({
  onSendMessage: (message, receiverId) => dispatch(sendMessage(message, receiverId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen);
