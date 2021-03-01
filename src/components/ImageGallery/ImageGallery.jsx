import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    modalOpen: false,
    bigImgSrc: '',
    bigImgAlt: '',
  };

  toogleModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
      bigImgSrc: '',
      bigImgAlt: '',
    }));
  };

  onImgClick = e => {
    this.toogleModal();

    this.setState({
      bigImgSrc: e.target.dataset.modal_img,
      bigImgAlt: e.target.alt,
    });
  };

  render() {
    const { images } = this.props;
    const { modalOpen, bigImgSrc, bigImgAlt } = this.state;

    return (
      <>
        <ul className={s.gallery}>
          <ImageGalleryItem images={images} onImgClick={this.onImgClick} />
        </ul>

        {modalOpen && (
          <Modal closeModal={this.toogleModal}>
            {<img src={bigImgSrc} alt={bigImgAlt} />}
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
