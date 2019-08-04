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
    const { messages } = this.props;
    return (
      <GiftedChat
        messages={messages}
        onSend={newMessages => this.onSend(newMessages)}
        user={{
          _id: 1,
          name: 'Ilyes Ben',
          avatar: 'https://img.bfmtv.com/c/1000/600/609ad/e9fd5f640762d13cef0fea8dd37.jpeg',
        }}
      />
    );
  }
}

ChatScreen.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSendMessage: PropTypes.func.isRequired,
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
