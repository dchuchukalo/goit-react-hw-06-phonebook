import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { connect } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';

import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ items }) => {
  return (
    <>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      {items.length > 1 && <Filter />}
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <p>The contact list is empty. Please add a new contact.</p>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop
        limit={3}
        transition={Zoom}
      />
    </>
  );
};

const mapStateToProps = state => ({
  items: state.contacts.items,
});

App.propTypes = {
  items: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(App);
