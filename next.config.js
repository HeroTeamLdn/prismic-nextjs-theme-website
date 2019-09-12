const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withTM = require("next-transpile-modules");
const isProd = process.env.STAGE === "production";

module.exports = withTM(
  withCSS(
    withSass({
      target: "serverless",
      transpileModules: ["use-global-hook"],
      generateBuildId: async () => {
        return "app" + Date.now();
      },
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        });

        const originalEntry = config.entry;
        config.entry = async () => {
          const entries = await originalEntry();

          if (
            entries["main.js"] &&
            !entries["main.js"].includes("./polyfills.js")
          ) {
            entries["main.js"].unshift("./polyfills.js");
          }

          return entries;
        };

        return config;
      }
    })
  )
);
