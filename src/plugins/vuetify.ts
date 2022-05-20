import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#222831",
        secondary: "#393E46",
        accent: "#00ADB5",
        text: "#EEEEEE",
        error: "#E6608F",
        success: "#00b585",
        warning: "#FED75B",
      },
    },
  },
});
