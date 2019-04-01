import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Heading from '../../fields/Heading';
import Body from '../../fields/Body';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './style.scss';

const ParagraphGalleryCarousel = (props) => {
  const {title, subhead, items, pid } = props;
  const galleryItems = items.map(item => {
    const src = item.r.media.r.image.file.cis.f.src;
    const srcSet = item.r.media.r.image.file.cis.f.srcSet;
    const thumb = item.r.thumb.file.cis.fixed.src;
    return {
      src,
      srcSet,
      alt: '',
      thumb,
    }
  });
  const settings = {
    customPaging: (i) => {
      return(
        <button className="gallery-carousel__nav-item">
          <img src={galleryItems[i].thumb} alt="" />
        </button>
      )
    },
    className: "gallery-carousel__carousel",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return(
    <section className="section gallery-carousel">
      <div className="section__container gallery-carousel__container">
        <div className="section__content-container">
          {title && <Heading level={2} classes="gallery-carousel__title"><span>{title}</span></Heading>}
          {subhead && <Body classes="gallery-carousel__intro-text" text={subhead}/>}
        </div>
        <Slider {...settings}>
          {galleryItems.map((item, key) => {
            return(
              <div className="gallery-carousel__item" key={`gallery-carousel--${pid}--${key}`}>
                <img src={item.src} className="gallery-carousel__item-media" srcSet={item.srcSet} alt="" sizes="100vw" />
                {(item.alt) && (<p className="gallery-carousel__item-text">{item.alt}</p>)}
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  );
}

ParagraphGalleryCarousel.propTypes = {
  /** Optional Title */
  title: PropTypes.string,
  /** Optional Title level. Defaults to 2 */
  title_level: PropTypes.number,
  /** Optional Intro */
  subhead: PropTypes.string,
  /** Array of items [{src, alt, thumb:[{src, alt}]}] */
  items: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    thumb: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  }))
}

ParagraphGalleryCarousel.defaultProps = {
  items: []
}

export default ParagraphGalleryCarousel;
