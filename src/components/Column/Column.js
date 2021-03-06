import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Column extends React.Component {

  

    //Deklaracja typów props
    static propTypes = {
      title: PropTypes.node.isRequired,
      cards: PropTypes.array,
      icon: PropTypes.string,
      addCard: PropTypes.func,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {

      const {title, icon, cards, addCard } = this.props;

      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title} <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          
          <div className={styles.creator}>
            <Creator text={settings.CardCreatorText} action={addCard} />
          </div>
        </section>
      );
    }
}

export default Column;
