import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import VueMask from "v-mask";

Vue.use(ElementUI);
Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
