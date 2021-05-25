const art = (data, imgBaseUrl) => {
  const imageSize = 'full/843,/0/default.jpg';
  const imgUrl = `${imgBaseUrl}/${data.image_id}/${imageSize}`;

  const backgroundColorPreview = `hsl(${data.color.h}, ${data.color.s}%, ${data.color.l}%)`;

  const artEl = document.createElement('div');
  artEl.classList.add('art');
  artEl.style.backgroundColor = backgroundColorPreview;

  artEl.innerHTML = `
      <img src="${imgUrl}" />
  `;

  addListener(artEl, data);

  return artEl;
};

function addListener(el, data) {
  el.addEventListener('click', () => {
    console.log('click', data);
  });
}

export default art;
