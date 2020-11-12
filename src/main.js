import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBwe6Qz-N7_XVSDq2sUJfjco0evFwFBl2Y",
  authDomain: "vue-calendar-a9b3d.firebaseapp.com",
  databaseURL: "https://vue-calendar-a9b3d.firebaseio.com",
  projectId: "vue-calendar-a9b3d",
  storageBucket: "vue-calendar-a9b3d.appspot.com",
  messagingSenderId: "37158634132",
  appId: "1:37158634132:web:40cb9139532cf3ed976a81" 
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
