const art = (data, imgBaseUrl) => {
  const sizes = {
    small: 200,
    hd: 843,
  };

  const imageSize = `full/${sizes.small},/0/default.jpg`;
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
      <img loading=lazy src="${imgUrl}" />
    `;
  } else {
    artEl.innerHTML = `
      <span class="not-available">IMAGE NOT AVAILABLE </span>
    `;
  }

  addListener(artEl, data);

  return artEl;
};

function addListener(el, data) {
  el.addEventListener('click', () => {
    console.log('click', data);
  });
}

export default art;
