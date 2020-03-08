let Notification = {
    template:
        `
            <div class="toast" role="alert"  aria-live="assertive" data-delay="3000" aria-atomic="true">
                  <div class="toast-header">
                    
                    <strong class="mr-auto">Nouvelle Connexion</strong>
                    <small>Right now</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="toast-body">
                       {{user}} vient de se connecter !
                  </div>
            </div>
        `,

    props: {
        user: String
    }
}
export default Notification;