import React, { Component } from 'react';

export class ContactList extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  render() {
    const { contacts } = this.state;
    return (
      <div contacts={contacts}>
        {contacts.map(({ id, name, number }) => (
          <ul key={id}>
            {' '}
            <li>
              {name}: {number}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
