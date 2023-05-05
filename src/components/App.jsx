import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
