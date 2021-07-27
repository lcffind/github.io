export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  a11y: {
    // the target DOM element
    element: "#root",
    // sets the execution mode for the addon
    manual: false,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const decorators = [
//   (story) => ({
//     components: { story },
//     template: '<div style="margin: 3em;"><story /></div>',
//   }),
// ];
