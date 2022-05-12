window.addEventListener("DOMContentLoaded", () => {

// const faveButton = document.querySelector('.fave')
const faveButtonArray = document.querySelectorAll('.fave')

faveButtonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
        e.preventDefault();


        const { userId } = req.session.auth;
        console.log(userId);
        if(userId) {
            db.FavoriteList.build({
                userId,
                albumId: id
            })
        } else {
            window.location.href = "/users/signin";
        }

    })
})

})
