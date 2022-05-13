window.addEventListener("DOMContentLoaded", () => {
    const deleteButtonArray = document.querySelectorAll('.delete-review')

    deleteButtonArray.forEach(button => {
        button.addEventListener('click', async(e) => {
        const reviewId = e.target.id;

        const res = await fetch(`/reviews/remove/${reviewId}`, {
            method: 'PUT'
        })

        const data = await res.json();

        if(data.message === 'Destroyed') {
            const container = document.getElementById(`container-${reviewId}`);
            container.remove();
        } else {
            alert('Failed');
        }
        alert('Removed Successfully');
    })
    })

})
