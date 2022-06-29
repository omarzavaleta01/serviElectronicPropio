
const cerrarSes=document.querySelector('.cerrar');
const userUp=document.querySelector('.up');
const btServ=document.querySelector('.slServ');
let text="Cerrar sesión"
let tex2="Bienvenido"
const perfil= auth.onAuthStateChanged;
const decora= document.querySelector(".login");
const icoDeco=document.querySelector(".logico")


cerrarSes.addEventListener('click' ,e=>{

    auth
    .signOut()
    .then(()=>{
        alert("sesion cerrada")
        window.location.href = "login.html";
    })
    idTiEsa = setTimeout(mensajes, 2000);
})

auth.onAuthStateChanged(user =>{
    if(user){

       let disName=user.email;
       userUp.textContent =disName;
       cerrarSes.textContent=text;  
       //alert("Bienvenido " +  user.email) 
       decoracion();
    }else{
        cerrarSes.classList.toggle("loginClose-active");       
    }
})

function mensajes(){
    alert("Sesión cerrada")
}
function decoracion(){
    decora.classList.toggle("login-active");
    icoDeco.classList.toggle("logico-active");
}

btServ.addEventListener("click", e =>{

    auth.onAuthStateChanged(user =>{
        if(user){
            window.location.href = "form-solicit-serv.html";
        }else{

            window.location.href = "login.html";
            alert("Para poder solicitar el servicio deves antes iniciar sesión");
        }
})

});