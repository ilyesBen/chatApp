import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { selectors, actions } from 'modules/Chat';
import { ConvsList } from './components';

const { selectUsers } = selectors;
const { getUsers } = actions;

class ConvsListScreen extends React.Component {
  componentDidMount() {
    const { onGetUsers } = this.props;
    onGetUsers();
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
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  users: selectUsers(state),
});

const mapDispatchToProps = dispatch => ({
  onGetUsers: () => dispatch(getUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConvsListScreen);
