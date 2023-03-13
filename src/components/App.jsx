import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const ArrayNames = contacts.map(contact => contact.name.toLowerCase());
    const normalizeName = name.toLowerCase();

    if (ArrayNames.includes(normalizeName)) {
      alert(`${name}вже є в книзі`);
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [{ id: nanoid(), name: name, number: number }, ...contacts],
      };
    });
  };

  handlerInputFilter = e => this.setState({ filter: e.currentTarget.value });

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  clickDeletBtn = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const contactElem = this.getContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmitHendler={this.handlerFormSubmit}></Form>
        <h2>Contacts</h2>
        <Filter
          text="Find contacts by name"
          value={filter}
          onChange={this.handlerInputFilter}
        />
        <ContactList
          contacts={contactElem}
          text="Delete"
          onClick={this.clickDeletBtn}
        />
      </>
    );
  }
}
