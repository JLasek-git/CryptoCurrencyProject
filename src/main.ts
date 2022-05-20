import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import vueCompositionApi from "@vue/composition-api";

Vue.config.productionTip = false;

import "@/Global/styles/main.scss";

Vue.use(vueCompositionApi);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
