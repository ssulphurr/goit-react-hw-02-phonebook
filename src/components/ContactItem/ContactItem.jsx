import React from 'react';
import css from './ContactItem.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contact__item}>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
