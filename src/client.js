import Vue from "vue";
import App from "@/pages/App.vue"
new Vue(
    {
        el: "#app",
        render: h => h(App)
    }
);

if (module.hot) {
    module.hot.accept();
}