import { componentFactory } from './core';
import { subscribe } from './core/pubSub';
import { GET_MORE_DATA, GET_MORE_DATA_DONE } from './events/constants';

const loader = (el) => {
  const hideClass = 'hide';

  const showLoader = () => {
    el.classList.remove(hideClass);
  };

  const hideLoader = () => {
    el.classList.add(hideClass);
  };

  subscribe(GET_MORE_DATA, showLoader);
  subscribe(GET_MORE_DATA_DONE, hideLoader);
};

componentFactory.set('loader', loader);
