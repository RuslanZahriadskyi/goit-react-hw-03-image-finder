import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    modalOpen: false,
    bigSrc: '',
    bigAlt: '',
  };

  toogleModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
      bigImgSrc: '',
      bigImgAlt: '',
    }));
  };

  onImgClick = (bigSrc, bigAlt) => {
    this.toogleModal();

    this.setState({ bigSrc, bigAlt });
  };

  render() {
    const { images } = this.props;
    const { modalOpen, bigSrc, bigAlt } = this.state;

    return (
      <>
        <ul className={s.gallery}>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                imgSrc={webformatURL}
                imgTags={tags}
                bigImg={largeImageURL}
                onImgClick={this.onImgClick}
              />
            );
          })}
        </ul>

        {modalOpen && (
          <Modal closeModal={this.toogleModal}>
            {<img src={bigSrc} alt={bigAlt} />}
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
};
