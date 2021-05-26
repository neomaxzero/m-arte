import { componentFactory } from './core';
import { publish } from './core/pubSub';
import { GET_MORE_DATA } from './events/constants';
import { setNextPage } from './utils/page';

const showMore = (el) => {
  el.addEventListener('click', getMoreImages);

  function getMoreImages() {
    setNextPage();

    publish(GET_MORE_DATA);
  }
};

componentFactory.set('showmore', showMore);
