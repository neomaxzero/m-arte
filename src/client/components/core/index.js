export const componentFactory = new Map();

const dataComponentAttr = 'data-component';

const createApp = () => {
  const htmlComponents = document.querySelectorAll(`[${dataComponentAttr}]`);

  htmlComponents.forEach((element) => {
    const name = element.getAttribute(dataComponentAttr);

    if (!componentFactory.has(name)) {
      return console.warn('Component', name, ' not found.');
    }

    const fn = componentFactory.get(name);

    fn(element);
  });
};

export default createApp;
