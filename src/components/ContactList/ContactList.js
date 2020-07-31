import React from 'react';
import ElementContactList from './ElementContactList';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    <ElementContactList contacts={contacts} deleteContact={deleteContact} />
  </ul>
);

export default ContactList;
