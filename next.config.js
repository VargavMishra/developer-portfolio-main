const path = require("path");

module.exports = {
  output: "export",

  basePath: "/Vargav_Mishra_React_Portfolio",
  assetPrefix: "/Vargav_Mishra_React_Portfolio/",

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    unoptimized: true,
  },
};