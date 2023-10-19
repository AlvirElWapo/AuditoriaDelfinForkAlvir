import { createApp } from 'vue'
import App from './mainpage.vue'
import '../../assets/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faHouse , faPhone, faEnvelope, faChevronRight, faFlagCheckered, faUser} from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faFacebookF, faYoutube} from "@fortawesome/free-brands-svg-icons";

library.add(faUserSecret, faHouse, faPhone, faEnvelope, faFacebook, faFacebookF, faChevronRight, faFlagCheckered, faYoutube, faUser)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#mainpage')
