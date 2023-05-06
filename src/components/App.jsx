import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

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

  addContact = ({ name, number }) => {
    const match = this.state.contacts.find(contact => {
      if (contact.name === name) {
        return name;
      }
    });

    if (match) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacts} />
        </Section>
      </>
    );
  }
}
