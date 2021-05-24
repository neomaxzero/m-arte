import { getArtworks } from '../repository/artwork';
import { componentFactory } from './core';

const artgrid = (el) => {
  async function getData() {
    setLoader(true);
    const { error, data, errorMsg } = await getArtworks();

    if (error) {
      showError(errorMsg);
    }
    setLoader(false);
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
