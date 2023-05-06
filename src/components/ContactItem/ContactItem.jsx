import React from 'react';
import css from './ContactItem.module.css';

const Contact = ({ name, number }) => {
  return (
    <li className={css.contact__item}>
      {name}: {number}
    </li>
  );
};

export default Contact;
