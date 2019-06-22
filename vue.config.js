module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import '~@/scss/_variables.scss';`, // Make scss variables available to all compoonents
      },
    },
  },
}
