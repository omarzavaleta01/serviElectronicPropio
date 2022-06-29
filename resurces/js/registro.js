//Registro
const registro = document.querySelector('.btn-registro');
registro.addEventListener("click", (eve) => {
    eve.preventDefault();
    const email = document.querySelector('#emailRegi').value;
    const password = document.querySelector('#passwordRegi').value;
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log('sing up')
        var user = userCredential.user;
        window.location.href = "servicios.html";
    }).catch((error)=>{
        alert("Error al crear cuenta")
    })

});