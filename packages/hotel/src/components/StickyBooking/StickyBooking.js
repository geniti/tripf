import React from 'react';
import useWindowSize from './useWindowSize';
import StickyBookingWrapper, {
  HotelInfo,
  InfoArea,
  Title,
  Logo,
  HotelAction,
  Price,
  ActionBtn,
  HotelRating,
} from './StickyBooking.style';

const StickyBooking = ({ logo, title, price, rating, action, className }) => {
  const addAllClasses = ['sticky_booking'];
  const windowSize = useWindowSize();
  const windowInnerWidth = process.browser && windowSize.innerWidth;

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <StickyBookingWrapper className={addAllClasses.join(' ')}>
      <HotelInfo className="hotel_info">
        {windowInnerWidth > 767 && (
          <>{logo && <Logo src={logo} alt={title} />}</>
        )}

        {title || rating || price ? (
          <InfoArea>
            {windowInnerWidth > 767 ? (
              <>{title && <Title>{title}</Title>}</>
            ) : (
              <Price>
                <span>${price}</span> / Night
              </Price>
            )}
            {rating && <HotelRating>{rating}</HotelRating>}
          </InfoArea>
        ) : (
          ''
        )}
      </HotelInfo>

      <HotelAction className="hotel_action">
        {windowInnerWidth > 767 && (
          <Price>
            <span>${price}</span> / Night
          </Price>
        )}
        <ActionBtn>{action}</ActionBtn>
      </HotelAction>
    </StickyBookingWrapper>
  );
};

export default StickyBooking;
