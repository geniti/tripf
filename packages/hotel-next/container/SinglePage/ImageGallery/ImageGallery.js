import React from 'react';
import ImageGallery from 'react-image-gallery';
import ImageGalleryWrapper from './ImageGallery.style';

const images = [
  {
    original: '/images/post-image-1.jpg',
    thumbnail: '/images/post-thumb-1.jpg',
  },
  {
    original: '/images/post-image-2.jpg',
    thumbnail: '/images/post-thumb-2.jpg',
  },
];

const PostImageGallery = () => {
  return (
    <ImageGalleryWrapper>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showIndex={true}
        lazyLoad={true}
        slideDuration={550}
      />
    </ImageGalleryWrapper>
  );
};

export default PostImageGallery;
