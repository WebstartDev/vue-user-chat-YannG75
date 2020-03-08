import Messages from './Messages.js'
let Message = {
    template:
        `
            <section class="chatContainer">
                   <article class="chat">
                   <Messages v-for="(message, index) in messages" :message="message"  :user="currentUser" :key="index"></Messages>
                    </article>
                   <div class="editor"><input type="text" data-meteor-emoji="true" placeholder="Votre message ici" name="message" id="editor" v-model="Message" @mouseup="change($event.target.value)"  @keypress.enter="send"><div class="send" @click="send"><img width="25" src="iconfinder_Send_1214987.svg" alt=""></div></div>
            </section>
         `,

    components: {
            Messages
    },

    data() {
        return {
            currentUser: {
                name: 'Anon'+Math.floor(Math.random() * (10000 - 1000) + 1000),
                pdp:  'https://s3.amazonaws.com/uifaces/faces/twitter/wikiziner/128.jpg'
            },

            messages: [],
            Message: ''
        }
    },

    methods: {
        send() {
            this.messages.push({
                message: this.Message,
                when: new Date().getHours()+':'+new Date().getMinutes()
            })

            this.Message = ''
            let chat = document.querySelector('.chat')
           setTimeout(() => {

               chat.scrollTop = chat.scrollHeight;
           }, 100)

        },

        change(e) {
            this.Message = e
        }
    }
}

export default Message;