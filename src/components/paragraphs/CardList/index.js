import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uid } from 'react-uid';

import Card from '../Card'

import Heading from '../../fields/Heading';

import './style.scss';

const CardList = (props) => {
  const classes = classNames(
    'card-list',
    {[`${props.classes}`]: props.classes}
  );
  return(
    <section className="card-list--container">
      {props.title && <Heading level={2} classes="card-list__title">{props.title}</Heading>}
      <ul className={classes}>
        {props.items.map((item, index) => {
          return(
            <li
              className="card-list__item"
              key={uid(item, index)}>
              <Card {...item} />
            </li>
          )
        })}
      </ul>
    </section>
  );
}

CardList.propTypes = {
  /** Optional Title */
  title: PropTypes.string,
  /** Array of Card Properties */
  items: PropTypes.array,
  /** Modifying classes */
  classes: PropTypes.string
}

export default CardList;
