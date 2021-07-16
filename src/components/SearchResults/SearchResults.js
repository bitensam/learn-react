import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Column/Column.scss';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {



  //Deklaracja typów props
  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.string,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {

    const { cards, icon } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}>
          <Icon name={icon} />
        </span>
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </section>
    );
  }
}

export default SearchResults;
