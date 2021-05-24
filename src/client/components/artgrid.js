import { getArtworks } from '../repository/artwork';
import renderArt from './art';
import { componentFactory } from './core';

const artgrid = (el) => {
  async function getData() {
    setLoader(true);
    const { error, data, errorMsg } = await getArtworks();
    console.log(data);
    if (error) {
      showError(errorMsg);
    }

    setLoader(false);

    const cards = data.data.map(renderArt);
    console.log(cards);

    el.innerHTML = cards.join('');
  }

  function setLoader(show) {
    const hideClass = 'hide';
    const loaderEl = document.querySelector('.js-loader');

    if (show) {
      loaderEl.classList.remove(hideClass);
    } else {
      loaderEl.classList.add(hideClass);
    }
  }

  function showError(errorMsg) {}

  getData();
};

componentFactory.set('artgrid', artgrid);
