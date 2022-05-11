const db = require('../../db/models')
const { clickId } = require('./utils');

window.addEventListener("DOMContentLoaded", () => {

const faveButton = document.querySelector('.fave')


faveButton.addEventListener('click', (e) => {
    e.preventDefault();



    const { userId } = req.session.auth;

    if(userId) {
        db.FavoriteList.build({
            userId,
            albumId
        })
    } else {
        window.location.href = "/users/signin";
    }

})

})
