import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ images, onImgClick }) {
  return images.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id} className={s.gallery__item}>
      <img
        src={webformatURL}
        alt={tags}
        data-modal_img={largeImageURL}
        className={s.card__img}
        onClick={onImgClick}
      />
    </li>
  ));
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onImgClick: PropTypes.func.isRequired,
};
