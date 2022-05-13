window.addEventListener("DOMContentLoaded", () => {
    const editButtonArray = document.querySelectorAll('.edit-review')

    editButtonArray.forEach(button => {
        button.addEventListener('click', async (e) => {
            const reviewId = e.target.id;
            const form = document.getElementById(`edit-form-${reviewId}`)
            if (form.classList.contains('hidden')) {
                form.classList.remove('hidden')
            } else {
                form.classList.add('hidden')
            }

            const submitBtn = document.getElementById(`edit-submit-${reviewId}`);
            submitBtn.addEventListener('click', async (submitEvent) => {
                // submitEvent.preventDefault();
                const content = document.getElementById(`${reviewId}-edit-content`).value

                const res = await fetch(`/reviews/edit/${reviewId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        content
                    })
                })

                const data = await res.json();
                if (data.message === 'Success') {
                    const contentEle = document.getElementById(`container-${reviewId}`)
                    contentEle.innerHTML = data.review.content
                    form.classList.add('hidden')

                } else {
                    alert('Failed');
                }
                alert('Updated Successfully');



            })



        })
    })
})
