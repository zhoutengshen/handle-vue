// 高阶函数基础组件
//参考 http://hcysun.me/2018/01/05/%E6%8E%A2%E7%B4%A2Vue%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6/#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9C%A8-Vue-%E4%B8%AD%E5%AE%9E%E7%8E%B0%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6%E6%AF%94%E8%BE%83%E9%9A%BE
export default function (WrappedComponent, /**@type{} */opstions = {}) {
    return {
        ...opstions,
        props: WrappedComponent.props,
        render(h) {
            const slots = Object.keys(this.$slots)
                .reduce((arr, key) => arr.concat(this.$slots[key]), [])
                .map(vnode => {
                    vnode.context = this._self
                    return vnode
                });
            return h(WrappedComponent, {
                attrs: this.$attrs,
                props: this.$props,
                on: this.$listeners,
                scopedSlots: this.$scopedSlots,
            }, [...slots])
        }
    }
}
