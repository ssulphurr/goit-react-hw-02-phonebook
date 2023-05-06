import React from 'react';
import css from './ContactList.module.css';
import Contact from 'components/ContactItem/ContactItem';

const Contacts = ({ contacts }) => {
  return (
    <>
      <ul className={css.contact__list}>
        {contacts.map(({ id, name, number }) => {
          return <Contact key={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};

export default Contacts;
