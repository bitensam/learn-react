import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
import Container from '../Container/Container';
// import CreatorList from '../CreatorList/CreatorList';
// import { pageContents /*listData*/ } from '../../data/dataStore';

class App extends React.Component {

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
    const {title, subtitle, lists} = this.props;
    return (
      <Container>
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <Search />
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </main>
      </Container>
    );
  }
}

export default App;
