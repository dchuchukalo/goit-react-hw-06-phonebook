import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className={styles.item} key={id}>
    <span className={styles.info}>
      {name}: {number}
    </span>
    <button className={styles.delete} onClick={onDelete} type="button">
      Delete
    </button>
  </li>
);

export default ContactItem;
