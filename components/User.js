 let User = {
    template:
        `
        <article class="user">
                <img :src="user.pdp" alt="">
                <span><b>{{user.name}}</b></span>
        </article>
    `,
    props: {
        user:Object,
    },
}
export default User;


