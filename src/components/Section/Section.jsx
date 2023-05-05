import React from 'react';
import css from './Section.module.css';
import Container from 'components/Container/Container';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </div>
  );
};

export default Section;
