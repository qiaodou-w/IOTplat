module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "": {
        target: "http://localhost:3000/",
        changeOrigin: true
      }
    }
  }
};
