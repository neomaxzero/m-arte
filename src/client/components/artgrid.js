import { publish, subscribe } from './core/pubSub';
import { getArtworks } from '../repository/artwork';
import renderArt from './art';
import { componentFactory } from './core';
import { GET_MORE_DATA, GET_MORE_DATA_DONE } from './events/constants';

const artgrid = (el) => {
  subscribe(GET_MORE_DATA, getData);

  async function getData() {
    const { error, data, errorMsg } = await getArtworks();

    publish(GET_MORE_DATA_DONE);

    if (error) {
      showError(errorMsg);
    }

    const imgBaseUrl = data.config.iiif_url;

    const cardArts = data.data.map((artData) => renderArt(artData, imgBaseUrl));

    cardArts.forEach((artEl) => el.appendChild(artEl));
  }

  function showError(errorMsg) {}

  getData();
};

componentFactory.set('artgrid', artgrid);
