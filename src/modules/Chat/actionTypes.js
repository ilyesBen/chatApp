import { creatActionTypes } from 'utils/actions';
import { Name } from './name';

const types = ['SEND_MESSAGE', 'SET_USERS', 'SET_MESSAGES'];

const actionTypes = creatActionTypes(Name, types);

export default actionTypes;
