window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

    const demoButton = document.getElementById('demo');
    console.log(demoButton);

    demoButton.addEventListener('click', async(e) => {
        e.preventDefault();
        // console.log('in the event listener')

      const res = await fetch('/users/signin', {
          method: 'GET'
      })

    //   const data = await res.json();
      console.log(res);
      const demoToken = document.getElementsByClassName('token');
      console.log(demoToken)
        await fetch('/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: {
                email: 'demo@user.com',
                hashedPassword: 'Demo11!'
            }
        })
    })
})
