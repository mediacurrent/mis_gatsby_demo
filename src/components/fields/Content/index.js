import React from 'react';
import PropTypes from 'prop-types';

// Paragraphs
import Card from '../../paragraphs/Card';
import CardList from '../../paragraphs/CardList';
import Faq from '../../paragraphs/Faq';
import Hero from '../../paragraphs/Hero';
import Map from '../../paragraphs/Map';
import Quote from '../../paragraphs/Quote';

const Content = ({content}) => (
  <>
    {content.map((section, i) => {
      const datakey = `paragraph--section--${section['__typename']}--${i}`;

      switch (section['__typename']) {
        case "paragraph__card":
          return <Card {...section} key={datakey} />
        case "paragraph__card_list":
          section.items = section.r.items;
          return <CardList {...section} key={datakey} />;
        case "paragraph__faq":
          return <Faq {...section} key={datakey} />;
        case "paragraph__hero_media":
          return <Hero {...section} key={datakey} />;
        case "paragraph__map":
          return <Map {...section} key={datakey} />;
        case "paragraph__quote":
          return <Quote {...section} key={datakey} />;
        default:
          console.log(section['__typename']);
          return '';
      }
    })}
  </>
);

Content.propTypes = {
  content: PropTypes.array
}

export default Content;
