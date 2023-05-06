import React from 'react';
import css from './ContactItem.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <div className={css.contact__item}>
        {name}: {number}
        <button
          className={css.btn__delete}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
