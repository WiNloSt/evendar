import _ from 'lodash';

let _state = { }

export const get = () => _state

export const set = (_s) => _.merge(_state, _s)
