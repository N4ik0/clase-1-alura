
let cant = document.getElementById("cantidad")
let boton  = document.getElementById("generar")
let contra = document.getElementById("contrasena")
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabsdfghijklmnopqrstuvwxyz0123456789!@#$%^&*()\\'


function generar(){
    let numeroDigitado= parseInt (cant.value)

    if( numeroDigitado < 8){
        alert("ingrese un valor mayor que 8")
        return;
    }

    let contra = ""
    let flag = 0
    for(let i = 0; i < numeroDigitado; i++){
        let aleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)]
        if(('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(aleatorio)) || ('0123456789'.includes(aleatorio))){
            flag ++;
        }
        contra += aleatorio 

    }
    console.log(contra)
    contrasena.value= contra
    if(flag <= 0){
        alert('Contrasena debil')
    }
}


function limpiar(){
    contrasena.value = ''
    console.log('contrasena borrada')
}




