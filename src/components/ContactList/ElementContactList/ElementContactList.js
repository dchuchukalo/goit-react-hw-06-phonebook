import React from 'react';
import PropTypes from 'prop-types';
import styles from './ElementContactList.module.css';

const ElementContactList = ({ contacts, deleteContact }) =>
  contacts.map(({ id, name, number }) => (
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

ElementContactList.propTypes = {
  contacts: PropTypes.PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ElementContactList;
