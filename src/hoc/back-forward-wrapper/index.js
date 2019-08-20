// 可以监听路由前进后退的告诫组件包装器
import hocUtil from "../hoc-util";
export default function backForwardWrapper(WrappedComponent) {
    const vueOptions = hocUtil(WrappedComponent);
    return {
        data() {
            return {
                waiting: false
            }
        },
        mounted() {
            this.historyPopStateHandle = () => {
                if (this.waiting) {
                    this.$emit("back");
                }
                this.waiting = false;
            }
            window.addEventListener("popstate", this.historyPopStateHandle);
        },
        beforeDestroy() {
            window.removeEventListener("popstate", this.historyPopStateHandle)
        },
        watch: {
            $route(to, from) {
                this.waiting = true;
                const timerId = window.setTimeout(() => {
                    if (this.waiting) {
                        this.$emit("forward");
                    }
                    this.waiting = false;
                    window.clearTimeout(timerId);
                }, 0)
            }
        },
        ...vueOptions
    }
}