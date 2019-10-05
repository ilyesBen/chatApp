import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { actions, selectors } from 'modules/Chat';
import { currentUser } from 'constants';
import { Header } from 'components';

const { sendMessage } = actions;
const { selectMessages } = selectors;

class ChatScreen extends React.Component {
  componentDidMount() {}

  render() {
    const { messages, navigation, onSendMessage } = this.props;
    const receiver = navigation.getParam('user');

    return (
      <View flex>
        <Header onBackPress={() => navigation.goBack()} title={receiver.name} />
        <GiftedChat
          messages={messages}
          onSend={newMessages => onSendMessage(newMessages[0], receiver.id)}
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
