const div1 = document.getElementById('box1')
const div2 = document.getElementById('box2')
const div3 = document.getElementById('box3')
const div4 = document.getElementById('box4')

let accionClick1 = Boolean
let accionClick2 = Boolean
let accionClick3 = Boolean
let accionClick4 = Boolean

accionClick1 = false;
accionClick2 = false;
accionClick3 = false;
accionClick4 = false;


const CambiarColor = (caja, color) =>{ //Mi funcion cambiar el color a negro
    caja.style.backgroundColor = color
}

//clicks en las cajitas div

div1.addEventListener('click', () => {
    if (!accionClick1){
        CambiarColor(div1,'black');
    }else{
        CambiarColor(div1,'');
    }
    accionClick1 = !accionClick1;
})

div2.addEventListener('click', () => {
    if (!accionClick2){
        CambiarColor(div2,'black');
    }else{
        CambiarColor(div2,'');
    }
    accionClick2 = !accionClick2;
})

div3.addEventListener('click', () => {
    if (!accionClick3){
        CambiarColor(div3,'black');
    }else{
        CambiarColor(div3,'');
    }
    accionClick3 = !accionClick3;
})

div4.addEventListener('click', () => {
    if (!accionClick4){
        CambiarColor(div4,'black');
    }else{
        CambiarColor(div4,'');
    }
    accionClick4 = !accionClick4;
})

//Segunda parte 

const div5 = document.createElement('div')
div5.style.width = '200px';
div5.style.height = '200px';
div5.style.backgroundColor = 'white';
div5.style.border = '1px solid black'

contenedor.appendChild(div5)

const NuevoColor = (elemento, color) =>{
    elemento.style.backgroundColor = color
}

document.addEventListener('keydown', function(event){
    if(event.key === 'a' || event.key === 'A'){
        NuevoColor (div5,'pink')
    }else if (event.key === 's' || event.key === 'S'){
        NuevoColor (div5, 'orange')
    }else if(event.key === 'd' || event.key === 'D'){
        NuevoColor (div5, '#00BFFF')
    }
})


