import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';
import List from '../List/List';
// import CreatorList from '../CreatorList/CreatorList';
import { pageContents, listData, listSkillData } from '../../data/dataStore';

class App extends React.Component {

  state = {
    lists: this.props.lists || [],
  }

  //Deklaracja typów props
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
        <List {...listSkillData} />
      </main>
    )
  }
}

export default App;
