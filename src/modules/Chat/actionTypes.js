import { creatActionTypes } from 'utils/actions';
import { Name } from './name';

const types = ['SEND_MESSAGE', 'SET_USERS'];

const actionTypes = creatActionTypes(Name, types);

export default actionTypes;
