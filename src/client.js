import Vue from "vue";
import App from "@/pages/App.vue";
import router from "@/router/index";
import VueRouter from "vue-router";
import backForwardWrapper from "@/hoc/back-forward-wrapper";
Vue.use(VueRouter);
const BackForwardApp = backForwardWrapper(App);
new Vue(
    {
        el: "#app",
        router: router,
        render: h => h(BackForwardApp)
    }
);
if (module.hot) {
    module.hot.accept();
}