import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { actions, selectors } from 'modules/Chat';

const { sendMessage } = actions;
const { selectMessages } = selectors;

class ChatScreen extends React.Component {
  onSend(messages = []) {
    const { onSendMessage } = this.props;
    onSendMessage(messages);
  }

  render() {
    const { messages, navigation } = this.props;
    const user = navigation.getParam('user');

    return (
      <GiftedChat
        messages={messages}
        onSend={newMessages => this.onSend(newMessages)}
        user={user}
      />
    );
  }
}

ChatScreen.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSendMessage: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  messages: selectMessages(state),
});

const mapDispatchToProps = dispatch => ({
  onSendMessage: messages => dispatch(sendMessage(messages)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen);
