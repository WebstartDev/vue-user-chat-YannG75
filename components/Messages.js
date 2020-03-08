let Messages = {
    template:
        `
        <div>
              <article class="d-flex justify-content-end align-items-center messageContent">
                        <div class="d-flex flex-column align-items-end justify-content-around mw-50">
                            <span class="mb-1"><b>: {{user.name}} </b></span>
                            <div class="message"> 
                                <span>{{message.message}}</span>
                            </div>
                        </div>
                        
                        
                        <div class="d-flex flex-column align-items-center mx-3 mt-3">
                        <img :src="user.pdp" alt="">
                        <span>{{message.when}}</span>
                        </div>
              </article>
        </div>
    `,
    props: {
        message: Object,
        user: Object
    }

}

export default Messages;