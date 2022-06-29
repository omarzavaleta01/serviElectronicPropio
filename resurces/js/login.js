
const login = document.querySelector('.btnLoginUp');
const btgoogle=document.querySelector('.btgoogle');

 
//Inicio de sesión correo y contreseña
login.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log('sing up')
        var user = userCredential.user;
        window.location.href = "index.html";

    }).catch((error)=>{
        alert("Credenciales incorrectas \n Verificar email y contraseña")
    })
});


// Inicio sesion google

btgoogle.addEventListener("click", e =>{

 const provaider= new firebase.auth.GoogleAuthProvider();
 auth.signInWithPopup(provaider)
 .then(result =>{
  window.location.href="index.html";
 })
 .catch(err =>{
    alert("error al iniciar sesion")
 })
});
