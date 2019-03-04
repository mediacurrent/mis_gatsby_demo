import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Heading from '../../fields/Heading';
import Body from '../../fields/Body';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './style.scss';

const ParagraphGalleryCarousel = (props) => {

  const {title, subhead, items } = props;
  const galleryItems = items.map(item => {
    const src = item.r.media.r.image.file.cis.fixed.src;
    const thumb = item.r.thumb.file.cis.fixed.src;
    return {
      src,
      alt: '',
      thumb,
    }
  });
  const settings = {
    customPaging: (i) => {
      return(
        <a className="gallery-carousel__nav-item" href="/">
          <img src={galleryItems[i].thumb} alt="" />
        </a>
      )
    },
    className: "gallery-carousel",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return(
    <section className="galery-carousel__container">
      {title && <Heading level={2} classes="gallery-carousel__title">{title}</Heading>}
      {subhead && <Heading level={3} classes="gallery-carousel__subhead">{subhead}</Heading>}
      {props.intro && <Body classes="gallery-carousel__intro-text" text={props.intro}/>}
      <Slider {...settings}>
        {galleryItems.map((item, key) => {
          return(
            <div className="gallery-carousel-item" key={key}>
              <img src={item.src} className="gallery-carousel-item__media" alt={item.alt } />
              <p className="gallery-carousel-item__text">{item.alt}</p>
            </div>
          )
        })}
      </Slider>
    </section>
  );
}

ParagraphGalleryCarousel.propTypes = {
  /** Optional Title */
  title: PropTypes.string,
  /** Optional Title level. Defaults to 2 */
  title_level: PropTypes.number,
  /** Optional Intro */
  intro: PropTypes.string,
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

export default ParagraphGalleryCarousel;
