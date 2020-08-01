import actionTypes from './contacts-types';

const addContact = newContact => ({
  type: actionTypes.ADD,
  payload: newContact,
});

const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

const resetFilter = () => ({
  type: actionTypes.RESET_FILTER,
});

export default { addContact, deleteContact, changeFilter, resetFilter };
