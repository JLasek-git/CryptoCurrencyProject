module.exports = {
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/Global/styles/variables.scss";`,
      },
    },
  },
};
