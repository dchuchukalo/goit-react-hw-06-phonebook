import React from 'react';
import styles from './ElementContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../../redux/contacts/contacts-actions';

const ElementContactList = ({ items, filter, deleteContact }) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredItems = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return filteredItems.map(({ id, name, number }) => (
    <li className={styles.item} key={id}>
      <span className={styles.info}>
        {name}: {number}
      </span>
      <button
        className={styles.delete}
        onClick={() => {
          deleteContact(id);
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
};

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(actions.deleteContact(contactId)),
});

ElementContactList.propTypes = {
  items: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementContactList);
