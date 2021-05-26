import { componentFactory } from './core';
import { subscribe } from './core/pubSub';
import { OPEN_GALLERY } from './events/constants';

const gallery = (el) => {
  const hideClass = 'hide';
  const closeBtn = el.querySelector('button');
  const image = el.querySelector('img');
  const title = el.querySelector('.title');

  subscribe(OPEN_GALLERY, showImage);

  document.addEventListener('keyup', ({ key }) => {
    if (key === 'Escape') {
      closeGallery();
    }
  });

  closeBtn.addEventListener('click', closeGallery);

  function showImage(message) {
    el.style.backgroundColor = message.color;
    image.src = message.image;
    image.srcset = `${message.imageRetina} 2x`;
    image.alt = `Image authored as: ${message.title}`;

    title.innerHTML = message.title;

    el.classList.remove(hideClass);
  }

  function closeGallery() {
    el.classList.add(hideClass);
  }
};

componentFactory.set('gallery', gallery);
