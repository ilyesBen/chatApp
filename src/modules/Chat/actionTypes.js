import { Name } from './name';

const appendName = actionType => `${Name}/${actionType}`;

const SEND_MESSAGE = appendName('SEND_MESSAGE');
const DUMMY_ACTION = appendName('DUMMY_ACTION');

export default { SEND_MESSAGE, DUMMY_ACTION };
