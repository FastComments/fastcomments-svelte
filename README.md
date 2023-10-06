# fastcomments-svelte

A set of Svelte widgets and wrappers for FastComments. `src/routes` contains runnable examples - simply run:

    npm install
    npm run dev

Then you can see all the widgets and edit them - for example to put in your own tenant id or try different configuration.

TypeScript has been used so that you can inspect the config objects for each widget to see what options they take. 

## Widgets

This library currently contains the following widgets:

- Collab Chat
- Comment Count (single)
- Comment Widget
- Image Chat
- Live Chat
- User Activity Feed

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of the library, everything inside `src/routes` is the showcase.

## Building

To build:

```bash
npm run package
```
