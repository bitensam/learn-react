import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import Container from '../Container/Container';


class Home extends React.Component {

  state = {
    lists: this.props.lists || [],
  }

  //Deklaracja typów props
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    description: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <Container>
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </main>
      </Container>
    );
  }
}

export default Home;
