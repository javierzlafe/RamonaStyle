let ubicacionPrincipal = window.pageYOffset; //0

 /*  AOS.init(); */

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})



//FUNCION BOTON AJAX


var btnCargar = document.getElementById ("ajax");

function cargarContenidoAjax(){
    let user = "javier"
    let pass = "1234"
    var xhr = new XMLHttpRequest();
    /* alert("prueba ajax") */

    xhr.open('GET','archivo.json', true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status ==200){
            let usuario=JSON.parse(xhr.responseText)
            for (let usuarios of usuario){
                if (usuarios.usuario === user) {
                    if(usuarios.pasword === pass){
                        console.log("bienvenido " + user)
                    }
                    else{
                        console.log("contraseña incorrecta")
                    }
                
            }
            /* else {
                console.log("usuario incorrecto")
            } */
            
        }
    }

    }


}


btnCargar.addEventListener("click", cargarContenidoAjax)

