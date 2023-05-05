import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form />
        </Section>

        <Section title="Contacts">
          <Contacts />
        </Section>
      </>
    );
  }
}
