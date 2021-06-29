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
    }

    // Początkowy stan komponentu
    state = {
      cards: this.props.cards || [],
    }

    addCard(title) {
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0, title,
            },
          ],
        }
      ));
    }


    render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title} <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          </h3>
          <div>
            {this.state.cards.map(({ key, ...cardProps }) => (
              <Card key={key} {...cardProps} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.CardCreatorText} action={this.addCard} />
          </div>
        </section>
      );
    }
}

export default Column;
