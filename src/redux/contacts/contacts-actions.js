import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add');

const deleteContact = createAction('contscts/Delete');

const changeFilter = createAction('contacts/ChangeFilter');

const resetFilter = createAction('contscts/ResetFilter');

export default { addContact, deleteContact, changeFilter, resetFilter };
