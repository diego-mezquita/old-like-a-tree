import Vue from 'vue';
import App from './App.vue';

// import '../semantic/src/semantic.less';
// import 'semantic-ui-less/semantic.less';
import basscss from 'basscss/css/basscss.min.css';

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import Vuetify from 'vuetify';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
