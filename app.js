import Chat from './components/Chat.js'
import Notification from './components/Notification.js'

var app = new Vue({
    el: '#app',
    data() {
        return {
            User: ''
        }
    },
    methods: {
        notif(user){
            this.User = user.name
            $('.toast').toast('show')
        }
    },

    components: {
        Chat,
        Notification
    }
})

