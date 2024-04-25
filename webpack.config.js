const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv = {}, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "films",
    webpackConfigEnv,
    argv,
  });

  const config = merge(defaultConfig, {});

  return config;
};
