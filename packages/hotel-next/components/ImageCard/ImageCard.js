import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import ImageCardWrapper, {
  ContentWrapper,
  Title,
  Meta,
} from './ImageCard.style';

const ImageCardNext = ({ className, imageSrc, title, link, meta }) => {
  const addAllClasses = ['image_card'];
  const pathLink = title.replace(/\s/g, '-');

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ImageCardWrapper className={addAllClasses.join(' ')}>
      <Link
        href={{
          pathname: `${link}`,
          query: { country: `${pathLink}` },
        }}
      >
        <a>
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
          <ContentWrapper>
            {title && <Title>{title}</Title>}

            {meta && <Meta>{meta}</Meta>}
          </ContentWrapper>
        </a>
      </Link>
    </ImageCardWrapper>
  );
};

ImageCardNext.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  meta: PropTypes.string,
};

ImageCardNext.defaultProps = {
  link: '#',
};

export default ImageCardNext;
