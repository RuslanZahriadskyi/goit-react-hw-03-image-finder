import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import findImages from './services/api-images';

import s from './App.module.css';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    serchQuery: '',
    page: 1,
    images: [],
    error: '',
    status: '',
    totalHits: null,
    perPage: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const { serchQuery: previousSearch, page: previousPage } = prevState;
    const { serchQuery: currentSearch, page: currentPage } = this.state;

    if (previousSearch !== currentSearch || previousPage !== currentPage) {
      this.setState({ status: Status.PENDING });
      this.getImages(currentSearch, currentPage);
    }
  }

  getImages(query, page) {
    findImages(query, page)
      .then(({ hits, totalHits }) => {
        const newImages = hits.map(image => {
          return {
            id: image.id,
            largeImageURL: image.largeImageURL,
            webformatURL: image.webformatURL,
            tags: image.tags,
          };
        });

        this.setState({
          images: [...this.state.images, ...newImages],
          totalHits,
          status: Status.RESOLVED,
        });
        if (page !== 1) {
          window.scrollTo({
            top:
              document.documentElement.scrollTop +
              document.documentElement.clientHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => {
        this.setState({
          images: [],
          error: error.message,
          status: Status.REJECTED,
        });
      });
  }

  handlerFormSubmit = serchQuery => {
    this.setState(prevstate => {
      if (prevstate.serchQuery === serchQuery) {
        return;
      }
      return { serchQuery, page: 1, images: [] };
    });
  };

  incrementPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { status, error, images, totalHits, page, perPage } = this.state;
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.handlerFormSubmit} />

        {(status === 'resolved' || status === 'pending') && (
          <div className={s.gallery__container}>
            <ImageGallery images={images} />
          </div>
        )}

        {status === 'resolved' && totalHits > page * perPage && (
          <Button onClick={this.incrementPage} />
        )}

        {status === 'rejected' && (
          <div className={s.errorContainer}>{error}</div>
        )}

        {status === 'pending' && (
          <div className={s.loaderContainer}>
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

export default App;
