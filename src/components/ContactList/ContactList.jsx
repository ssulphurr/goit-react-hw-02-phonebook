import React from 'react';
import css from './ContactList.module.css';
import Contact from 'components/ContactItem/ContactItem';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={css.contact__list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
