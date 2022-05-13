
window.addEventListener("DOMContentLoaded", () => {

// const faveButton = document.querySelector('.fave')
const faveButtonArray = document.querySelectorAll('.fave')

faveButtonArray.forEach(button => {
    button.addEventListener('click', async(e) => {
        const albumId = e.target.id;
        e.preventDefault();

        const res = await fetch(`/users/favorite-list/${albumId}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
        })

        const data = await res.json();

        if(data.message === 'Added'){
            alert('Worked');
        }else {
            alert('Failed');
        }

    })
})

const removeFaveArray = document.querySelectorAll('.removeFave')

removeFaveArray.forEach(button => {
    button.addEventListener('click', async(e) => {
        const albumId = e.target.id;

        const res = await fetch(`/users/favorite-list/remove/${albumId}`,{
            method: 'PUT'
        })

        const data = await res.json();

        if(data.message === 'Destroyed'){
            const container = document.getElementById(`container-${albumId}`);
            container.remove();
        }else{
            alert('Failed');
        }
        alert('Removed Successfully');
    })
})
})
