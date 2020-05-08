module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/index.scss";`
      }
    }
  },
  devServer: {
    port: 2335
  }
};
