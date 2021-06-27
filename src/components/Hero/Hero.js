import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';
//import List from '../List/List';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img className={styles.image} src={props.imageSrc}></img>
    </header>
);

// Deklaracja properties dla funkcji strzalkowej
Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
};
export default Hero;