import sampleArt from '../../../sample_data/artworks.json';

const BASE_API = 'https://api.artic.edu/api/v1';

const artworkUrl = (page = 1) =>
  `${BASE_API}/artworks?fields=id,title,image_id,color&page=${page}`;

export const getArtworksSample = async () => {
  const WAITING_TIME = 300;

  return new Promise((resolve) => {
    function getSample() {
      resolve(sampleArt);
    }

    setTimeout(getSample, WAITING_TIME);
  });
};

export const getArtworks = async (page) => {
  const result = {
    error: false,
    data: [],
    loading: true,
  };
  try {
    const data = await fetch(artworkUrl(page));
    result.data = await data.json();
  } catch (error) {
    result.error = true;
    result.errorMsg = error;
  }

  result.loading = false;
  return result;
};

export default {
  getArtworks,
};
