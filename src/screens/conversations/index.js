import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { selectors, actions } from 'modules/Chat';
import { ConvsList } from './components';

const { selectUsers } = selectors;
const { getUsers, getAllMessages } = actions;

class ConvsListScreen extends React.Component {
  componentDidMount() {
    const { onGetUsers, onGetMessages } = this.props;
    onGetUsers();
    onGetMessages();
  }

  render() {
    const { users, navigation } = this.props;
    return (
      <View flex={1}>
        <ConvsList users={users} navigation={navigation} />
      </View>
    );
  }
}

ConvsListScreen.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  onGetUsers: PropTypes.func.isRequired,
  onGetMessages: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  users: selectUsers(state),
});

const mapDispatchToProps = dispatch => ({
  onGetUsers: () => dispatch(getUsers()),
  onGetMessages: () => dispatch(getAllMessages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConvsListScreen);
