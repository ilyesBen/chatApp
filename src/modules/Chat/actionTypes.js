import { creatActionTypes } from 'utils/actions';
import { Name } from './name';

const types = ['SEND_MESSAGE', 'DUMMY_ACTION'];

const actionTypes = creatActionTypes(Name, types);

export default actionTypes;
