import Vue from "vue";
import App from "@/pages/App.vue";
import router from "@/router/index";
import VueRouter from "vue-router";
import hocUtil from "@/hoc/hoc-util";
Vue.use(VueRouter);
const AppHoc = hocUtil(App, {
    mounted() {
        console.log("HEI BOY");
    },
});
new Vue(
    {
        el: "#app",
        router: router,
        render: h => h(AppHoc)
    }
);
if (module.hot) {
    module.hot.accept();
}