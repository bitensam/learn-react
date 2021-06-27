import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';

class List extends React.Component {

    //Deklaracja typów props
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    }

    // deklaracja domyślej wartości typu props
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }
    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} imageSrc={this.props.image} />
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column title={'Today'} />
                    <Column title={'Tomorrow'} />
                    <Column title={'At this week'} />
                </div>
            </section>
        )
    }
}

export default List;