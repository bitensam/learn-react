import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <NavLink to='/' activeClassName='active' className={styles.logo}>
              <Icon name={settings.icon.name} />
            </NavLink>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/Faq' activeClassName='active'>Faq</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;