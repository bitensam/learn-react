import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

class Column extends React.Component {
    //Deklaracja typów props
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    }
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title}</h3>
            </section>
        )
    }
}

export default Column;
