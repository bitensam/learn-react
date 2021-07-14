import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqContents, faqData } from '../../data/dataStore';
import styles from '.././Home/Home.scss';


const Faq = () => (
  <Container>
    <main className={styles.component}>
      <h1 className={styles.title}>{faqContents.title}</h1>
      <h2 className={styles.subtitle}>{faqContents.subtitle}</h2>
      <Hero titleText={faqData.title} image={faqData.image} />
      <p>{faqContents.text}</p>
      <p>{faqContents.text}</p>
      <p>{faqContents.text}</p>
      <p>{faqContents.text}</p>
      <p>{faqContents.text}</p>
      <p>{faqContents.text}</p>
    </main>
  </Container>
);


export default Faq;