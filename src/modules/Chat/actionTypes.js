import { creatActionTypes } from 'utils/actions';
import { Name } from './name';

const types = [
  'SEND_MESSAGE',
  'GET_USERS_LOAD',
  'GET_USERS_SUCCESS',
  'GET_MESSAGES_LOAD',
  'GET_MESSAGES_SUCCESS',
];

const actionTypes = creatActionTypes(Name, types);

export default actionTypes;
