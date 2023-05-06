import React from 'react';
import css from './Contacts.module.css';

const Contacts = ({ contacts }) => {
  return (
    <ul className={css.contact__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contact__item}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
