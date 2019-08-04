import { combineReducers } from 'redux';
import { chatName, chatReducer } from 'modules/Chat';

const reducers = combineReducers({
  [chatName]: chatReducer,
});

export default reducers;
