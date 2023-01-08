import React, { Component } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';

export class App extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}
