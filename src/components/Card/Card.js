import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
    //Deklaracja typów props
    static propTypes = {
        cards: PropTypes.array,
        title: PropTypes.node,
    }
    render() {
        return (
            <div className={styles.component}>
                <h3 className={styles.title}>{this.props.title}</h3>
            </div>
        )
    }
}


export default Card;