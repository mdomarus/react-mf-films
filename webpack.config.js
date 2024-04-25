const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
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
