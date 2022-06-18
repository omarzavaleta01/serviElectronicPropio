const login = document.querySelector('.login');

login.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
   
    auth.createUserWithEmailAndPassword(email,password)
        .then(userCredential =>{
            console.log('registro existoso');
        })

      

    
})