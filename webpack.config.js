const path = require("path");
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.join(___dirname, "dist"),
        filename: "main.js",
    },
};