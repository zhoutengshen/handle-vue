import Vue from "vue";
import App from "@/pages/App.vue";
new Vue(
    {
        el: "#app",
        render: h => h(App)
    }
);
//这里是必须的，没有他无法热更新
if (module.hot) {
    module.hot.accept();
}