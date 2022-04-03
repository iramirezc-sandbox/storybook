// See notes below.
// const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    // NOTE: When overriding default Storybook Webpack configuration,
    // make sure to preserve 'entry' and 'output'.
    console.log("Overriding Storybook-Webpack config rules...");

    // NOTE: At the time of writing this,
    // Storybook's Webpack is version 4 vs my App's Webpack version 5.
    // Overriding the config this way is not compatible.
    // return {
    //   ...config,
    //   module: { ...config.module, rules: custom.module.rules },
    // };

    // Instead, I'll manually need to re-write every rule to match v4 API schema.
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    };
  },
};
