import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SwiperSlide } from 'swiper/react';
import HomesGuestLovesHeader from './HomesGuestLovesHeader';
import Carousel from './Carousel';
import 'swiper/swiper-bundle.css';
import '../../style.css';
import Hotel from './Hotel';
import { getPopularHotels } from '../../actionCreator/hotels';

const Container = (props) => {
  const popularHotels = useSelector((state) => state.hotels.popular || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularHotels());
  }, []);

  return (
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    <div className={props.className}>
      <HomesGuestLovesHeader className="homes-block-header" />
      <Carousel
        slides={popularHotels.map((el, index) => (
          <SwiperSlide
            key={index.toString()}
            tag="li"
            className="homes-list-item col-3 col-md-6 col-sm-3"
          >
            <Hotel
              homesListCardClassName="homes-list-card"
              homesListImagesClassName="homes-list-images"
              homesLinkImageClassName="homes-link-image"
              homesListContentClassName="homes-list-content"
              homesListHeadingClassName="homes-list-heading"
              homesListTitleClassName="homes-list-title"
              homesListSubtitleClassName="homes-list-subtitle"
              homesListTitleContent={`${el.name},`}
              homesListSubtitleContentCity={`${el.city}`}
              homesListSubtitleContentCountry={`${el.country}`}
              src={el.imageUrl}
              alt={el.name}
            />
          </SwiperSlide>
        ))}
      />
    </div>
  );
};

export default Container;
