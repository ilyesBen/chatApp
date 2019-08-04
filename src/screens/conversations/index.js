import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { selectors } from 'modules/Chat';
import { ConvsList } from './components';

const { selectUsers } = selectors;

class ConvsListScreen extends React.Component {
  componentDidMount() {}

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
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  users: selectUsers(state),
});

export default connect(mapStateToProps)(ConvsListScreen);
