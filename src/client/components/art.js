import { publish } from './core/pubSub';
import { OPEN_GALLERY } from './events/constants';

const art = (data, imgBaseUrl) => {
  const sizes = {
    small: 200,
    hd: 843,
    superHd: 1686,
  };

  const imageSize = `full/${sizes.small},/0/default.jpg`;
  const imageLargeSize = `full/${sizes.hd},/0/default.jpg`;
  // Falling back to hd because API always redirects for 1686 res
  const imageRetina = `full/${sizes.hd},/0/default.jpg`;

  const imgUrl = `${imgBaseUrl}/${data.image_id}/${imageSize}`;
  let backgroundColorPreview = 'black';

  if (data.color) {
    backgroundColorPreview = `hsl(${data.color.h}, ${data.color.s}%, ${data.color.l}%)`;
  }

  const artEl = document.createElement('div');
  artEl.classList.add('art');
  artEl.style.backgroundColor = backgroundColorPreview;

  if (data.image_id) {
    artEl.innerHTML = `
      <img loading=lazy src="${imgUrl}" alt="art titled ${data.title}" />
      <div class="background"><span class="title">${data.title}</span></div>
    `;
  } else {
    artEl.innerHTML = `
      <span class="not-available">IMAGE NOT AVAILABLE </span>
    `;
  }

  const imgGalleryUrl = `${imgBaseUrl}/${data.image_id}/${imageLargeSize}`;
  const imgGalleryRetinaUrl = `${imgBaseUrl}/${data.image_id}/${imageRetina}`;

  onClickArt(artEl, {
    image: imgGalleryUrl,
    title: data.title,
    imageRetina: imgGalleryRetinaUrl,
    color: backgroundColorPreview,
  });

  return artEl;
};

function onClickArt(el, data) {
  el.addEventListener('click', () => {
    publish(OPEN_GALLERY, data);
  });
}

export default art;
