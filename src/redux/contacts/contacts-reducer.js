import actions from './contacts-actions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
  [actions.resetFilter]: () => '',
});

export default combineReducers({
  items,
  filter,
});
