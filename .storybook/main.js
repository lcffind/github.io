const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-storysource",
    // {
    //   name: "@storybook/addon-storysource",
    //   options: {
    //     rule: {
    //       // test: [/\.stories\.jsx?$/], This is default
    //       include: [path.resolve(__dirname, "../src")], // You can specify directories
    //     },
    //     loaderOptions: {
    //       prettierConfig: { printWidth: 80, singleQuote: false },
    //       injectStoryParameters: false,
    //     },
    //   },
    // },
    {
      name: "@storybook/addon-docs",
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false, //显示全部源码，如不配置只会显示当前使用的代码
        },
      },
    },
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // Return the altered config
    return config;
  },
};
