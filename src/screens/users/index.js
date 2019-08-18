import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { selectors } from 'modules/Chat';
import { UsersList } from './components';

const { selectUsers, selectUsersLoading } = selectors;

class UsersScreen extends React.Component {
  componentDidMount() {}

  render() {
    const { users, navigation } = this.props;

    return (
      <View flex>
        <UsersList users={users} navigation={navigation} />
      </View>
    );
  }
}

UsersScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  users: selectUsers(state),
  loading: selectUsersLoading(state),
});

// const mapDispatchToProps = dispatch => ({
//   onGetUsers: () => dispatch(getUsers()),
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(UsersScreen);
