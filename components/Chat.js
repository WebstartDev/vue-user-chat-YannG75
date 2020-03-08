import Message from './Message.js'
import Users from './Users.js'

let Chat = {
    template:
        `
            <div id="chat" class="container-fluid d-flex justify-content-around">
                <div id="left">
                <Users @new-user="newUser"></Users>
                </div>
                <div id="right">
                <Message></Message>
                </div>
            </div>
        `,

    components:{
        Message,
        Users
    },

    methods: {
        newUser(users) {
            this.$emit('last-connexion', users[users.length-1])
        }
    },

    mounted() {

        new MeteorEmoji()

    }

}
export default Chat;