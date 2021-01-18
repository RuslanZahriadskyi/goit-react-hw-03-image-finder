import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import './App.css';

class App extends Component {
  state = {
    serchQuery: '',
  };

  handlerFormSubmit = serchQuery => {
    this.setState({ serchQuery });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handlerFormSubmit} />
      </div>
    );
  }
}

export default App;
