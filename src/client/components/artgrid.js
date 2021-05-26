import { publish, subscribe } from './core/pubSub';
import { getArtworks } from '../repository/artwork';
import renderArt from './art';
import { componentFactory } from './core';
import {
  GET_MORE_DATA,
  GET_MORE_DATA_DONE,
  SHOW_ERROR,
} from './events/constants';
import { getPage } from './utils/page';

const artgrid = (el) => {
  subscribe(GET_MORE_DATA, getData);

  async function getData() {
    const page = getPage();
    const { error, data, errorMsg } = await getArtworks(page);

    publish(GET_MORE_DATA_DONE);

    if (error) {
      return publish(SHOW_ERROR, errorMsg);
    }

    const imgBaseUrl = data.config.iiif_url;

    const cardArts = data.data.map((artData) => renderArt(artData, imgBaseUrl));

    cardArts.forEach((artEl) => el.appendChild(artEl));

    cardArts[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }

  getData();
};

componentFactory.set('artgrid', artgrid);
