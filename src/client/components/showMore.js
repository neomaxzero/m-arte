import { componentFactory } from './core';
import { publish } from './core/pubSub';
import { GET_MORE_DATA } from './events/constants';

const showMore = (el) => {
  el.addEventListener('click', () => publish(GET_MORE_DATA));
};

componentFactory.set('showmore', showMore);
