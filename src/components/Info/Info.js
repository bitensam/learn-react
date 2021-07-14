import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoData, infoContents } from '../../data/dataStore';
import styles from '../Home/Home.scss';

const Info = () => (
  <Container>
    <main className={styles.component}>
      <h1 className={styles.title}>{infoContents.title}</h1>
      <h2 className={styles.subtitle}>{infoContents.subtitle}</h2>
      <Hero titleText={infoData.title} image={infoData.image} />
      <p>{infoContents.text}</p>
    </main>
  </Container>
);

export default Info;