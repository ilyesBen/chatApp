import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { selectors, actions } from 'modules/Chat';
import { Header } from 'components';
import { ConvsList } from './components';

const { selectUsers, selectUsersWithLastMessage, selectMessagesLoading } = selectors;
const { getUsers, getAllMessages } = actions;

class ConvsListScreen extends React.Component {
  componentDidMount() {
    const { onGetUsers, onGetMessages } = this.props;
    onGetUsers();
    onGetMessages();
  }

  render() {
    const { navigation, usersWithLastMessage } = this.props;

    return (
      <View flex>
        <Header title="Chats" />
        <ConvsList users={usersWithLastMessage} navigation={navigation} />
      </View>
    );
  }
}

ConvsListScreen.propTypes = {
  onGetUsers: PropTypes.func.isRequired,
  onGetMessages: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  usersWithLastMessage: PropTypes.arrayOf(PropTypes.object).isRequired,
  // messagesLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  users: selectUsers(state),
  usersWithLastMessage: selectUsersWithLastMessage(state),
  messagesLoading: selectMessagesLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onGetUsers: () => dispatch(getUsers()),
  onGetMessages: () => dispatch(getAllMessages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConvsListScreen);
