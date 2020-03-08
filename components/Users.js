import User from './User.js'

let Users = {
    template:
        `
            <div class="h-100">
                    <h3 class="text-center">Utilisateurs en ligne </h3>
                    <div class="userContainer">
                            <User v-for="(user, index) in users" :user="user" :key="index"></User> 
                    </div>
                        
            </div>
        `,

    data() {
        return {
            users: []
        }
    },

    components: {
        User
    },

    mounted() {

        setInterval(()=>{
            this.users.push({name : faker.name.firstName(), pdp: faker.image.avatar()})
            this.$emit('new-user', this.users)
        }, 10000)



    }

}
export default Users;
