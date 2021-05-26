import { componentFactory } from './core';
import { subscribe } from './core/pubSub';
import { SHOW_ERROR } from './events/constants';

const error = (el) => {
  subscribe(SHOW_ERROR, showError);

  function showError(errorMsg) {
    el.innerHTML = errorMsg;
    el.classList.remove('hide');
  }
};

componentFactory.set('error', error);
