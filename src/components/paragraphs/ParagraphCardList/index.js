import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uid } from 'react-uid';

import ParagraphCard from '../ParagraphCard'

import Heading from '../../fields/Heading';

import './style.scss';

const ParagraphCardList = (props) => {
  const classes = classNames(
    'card-list',
    {[`${props.classes}`]: props.classes}
  );
  return(
    <section className="card-list--container">
      {props.title && <Heading className="card-list__title" level={2}>{props.title}</Heading>}
      <ul className={classes}>
        {props.items.map((item, index) => {
          return(
            <li
              className="card-list__item"
              key={uid(item, index)}>
              <ParagraphCard {...item} />
            </li>
          )
        })}
      </ul>
    </section>
  );
}

ParagraphCardList.propTypes = {
  /** Optional Title */
  title: PropTypes.string,
  /** Array of Card Properties */
  items: PropTypes.array,
  /** Modifying classes */
  classes: PropTypes.string
}

export default ParagraphCardList;
