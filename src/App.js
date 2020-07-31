import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast, Zoom } from 'react-toastify';

import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  notifyWarn = text => toast.warn(text);

  notifySuccess = text => toast.success(text);

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    const newContact = { id: uuidv4(), ...data };
    this.findAlreadyInContacts(newContact);
  };

  findAlreadyInContacts = newContact => {
    const name = newContact.name.toLowerCase();

    if (name === '') {
      this.notifyWarn(`Please enter name and number`);
      return;
    }

    if (
      this.state.contacts.find(contact => contact.name.toLowerCase() === name)
    ) {
      this.notifyWarn(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
    this.notifySuccess('Added successfully');
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className={styles.title}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
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
  }
}

export default App;
