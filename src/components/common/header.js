/**
 * Created by ahsan.zaman on 3/23/2019.
 */
import React from 'react';

export default class Header extends React.Component {
  handleSearch = (e) => {
    e.preventDefault();

    const width = window.innerWidth;

    if (width >= 500) {
      const search = $('#search');
      const input = search.find('input');

      if (!search.hasClass('active')) {
        search.addClass('active');
        input.focus();
      } else {
        search.removeClass('active');
        input.val('');
        input.focusout();
      }
    }

  }

  componentDidMount() {
    document.addEventListener('click', function(e) {
      e.preventDefault();
      const elementToHide = document.getElementById('search');
      if (e.target.className == 'search-toggle' || e.target == elementToHide || e.target.classList.contains('search-input'))
        return;
      if (elementToHide.className == 'active')
        this.handleSearch(e);
      }
    .bind(this))
  }

  render() {
    return (
      <header>
        <div class="row">
          <div class="col s12 m6"><img src="./assets/images/cf-logo.png" alt="CarreFour"/></div>
          <div class="col s12 m6 position-relative ">
            <div id="search">
              <input type="search" class="browser-default search-input"/>
              <img src="./assets/images/search.png" alt="search" class='search-toggle' onClick={this.handleSearch}/>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </header>
    )
  }
}
