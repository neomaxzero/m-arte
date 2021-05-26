export const getPage = () => {
  const url = new URL(window.location);

  return Number(url.searchParams.get('page') || '1');
};

export const setNextPage = () => {
  const url = new URL(window.location);

  const currentPage = getPage();
  url.searchParams.set('page', currentPage + 1);

  history.pushState({}, '', url);
};

export default { getPage, setNextPage };
