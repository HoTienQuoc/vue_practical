import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue'


createApp(App)
    .component('friend-contact',FriendContact)
    .mount('#app')
