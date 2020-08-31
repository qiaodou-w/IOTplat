module.exports = {
  devServer: {
    proxy: {
      users: {
        target: "http://localhost:3000/",
        changeOrigin: true
      }
    }
  }
};
