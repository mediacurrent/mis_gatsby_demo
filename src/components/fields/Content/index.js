import React from 'react';
import PropTypes from 'prop-types';

// Paragraphs
import ParagraphBreaker from '../../paragraphs/ParagraphBreaker';
import ParagraphCard from '../../paragraphs/ParagraphCard';
import ParagraphCardList from '../../paragraphs/ParagraphCardList';
import ParagraphFaq from '../../paragraphs/ParagraphFaq';
import ParagraphGalleryCarousel from '../../paragraphs/ParagraphGalleryCarousel';
import ParagraphHero from '../../paragraphs/ParagraphHero';
import ParagraphMap from '../../paragraphs/ParagraphMap';
import ParagraphQuote from '../../paragraphs/ParagraphQuote';

const Content = ({content}) => (
  <>
    {content.map((section, i) => {
      const datakey = `paragraph--section--${section['__typename']}--${i}`;

      switch (section['__typename']) {
        case "paragraph__breaker":
          return <ParagraphBreaker {...section} key={datakey} />;
        case "paragraph__card":
          return <ParagraphCard {...section} key={datakey} />;
        case "paragraph__card_list":
          section.items = section.r.items;
          return <ParagraphCardList {...section} key={datakey} />;
        case "paragraph__faq":
          return <ParagraphFaq {...section} key={datakey} />;
        case "paragraph__gallery_carousel":
          section.items = section.r.items;
          return <ParagraphGalleryCarousel {...section} key={datakey} />;
        case "paragraph__hero_media":
          if (content.home_video_hero) {
            section.home_video_hero = true;
          }
          return <ParagraphHero {...section} key={datakey} />;
        case "paragraph__map":
          return <ParagraphMap {...section} key={datakey} />;
        case "paragraph__quote":
          return <ParagraphQuote {...section} key={datakey} />;
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
