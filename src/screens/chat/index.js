import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { actions, selectors } from 'modules/Chat';
import { currentUser } from 'constants';

const { sendMessage } = actions;
const { selectMessages } = selectors;

class ChatScreen extends React.Component {
  componentDidMount() {}

  render() {
    const { messages, navigation, onSendMessage } = this.props;
    const receiverId = navigation.getParam('user').id;

    return (
      <View flex>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <GiftedChat
          messages={messages}
          onSend={newMessages => onSendMessage(newMessages[0], receiverId)}
          user={{ _id: currentUser.id }}
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
