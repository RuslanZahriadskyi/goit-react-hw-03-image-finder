import { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // onChange={}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
