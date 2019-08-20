import VueRouter from "vue-router";
/**
 * @type {import("vue-router").RouterOptions}
 */
const routerOptions = {
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "name",
            component: () => import("@/pages/home")
        }
    ]
}
export default new VueRouter({
    ...routerOptions
})
