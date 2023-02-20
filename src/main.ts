import { createApp } from "vue";
import App from "./App.vue";
import svgIcon from '~/components/SvgIcon/index.vue' // 引入组件
import 'virtual:svg-icons-register'; // 引入注册脚本

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import 'uno.css'

import "~/theme/index.scss";

// If you want to use ElMessage, import it.
// import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App);
// app.use(ElementPlus);
app.component('svg-icon', svgIcon).mount("#app");
