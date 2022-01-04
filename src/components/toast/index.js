

export default {
	// 注册Toast
	install(Vue) {
		Vue.prototype.$Toast = (view, opts,duration) => {
			
			// 生成一个Vue的子类
			let toastTpl = Vue.extend(view);
			// 生成一个该子类的实例
			let tpl = new toastTpl().$mount();
			// 并将此div加入全局挂载点内部
			document.body.appendChild(tpl.$el);
			// 把参数放进去
			tpl =  Object.assign(tpl, opts)
			// 定时消失
			setTimeout(() => {
				document.body.removeChild(tpl.$el);
			}, duration)
		}
	}
}
