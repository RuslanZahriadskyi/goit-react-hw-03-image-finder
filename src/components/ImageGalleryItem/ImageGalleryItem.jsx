import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ imgSrc, imgTags, bigImg, onImgClick }) {
  return (
    <li className={s.gallery__item}>
      <img
        src={imgSrc}
        alt={imgTags}
        className={s.card__img}
        onClick={() => {
          onImgClick(bigImg, imgTags);
        }}
      />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgTags: PropTypes.string,
  bigImg: PropTypes.string.isRequired,

  onImgClick: PropTypes.func.isRequired,
};
