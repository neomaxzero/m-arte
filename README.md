# Arte

Personal showcase from the [Art Institute of Chicago](https://www.artic.edu/)

## Getting started

1. Install: `npm install`.

```
Development: > npm run dev
Build: > npm run build

```

## How does it work?

### Components system

- Inside the components folder you will find each of the components responsibles of handling the corresponding `data-component=X`section of the HTML.
- Components communicate through a simple pubSub component found in `core/pubSub.js`;
- Available messages will be found in `events/constants.js`.

## Proposed next steps

- Acceptance tests.
- Create a route for the gallery view.
- Save first page as static content.
- Typescript would help messaging system.
- Navigation with keys inside the gallery.
