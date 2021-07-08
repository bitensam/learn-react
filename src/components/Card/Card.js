import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  //Deklaracja typów props
  static propTypes = {
    title: PropTypes.node,
  }
  render() {

    const {title} = this.props;

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    );
  }
}


export default Card;