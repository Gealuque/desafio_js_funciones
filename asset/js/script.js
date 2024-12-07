
/*

//Código Base

function pintar(){
    ele.style.backgroundColor = 'yellow'
  }

  const ele = document.getElementById("ele1") 
  ele.addEventListener("click", pintar);

*/

// Primera módificación

/*const ele = document.getElementById('ele1')

ele.addEventListener('click', () =>{
    ele.style.backgroundColor = 'yellow'
})

*/

//Segunda Modificación

const ele = document.getElementById('ele1')

let accionClick = Boolean
accionClick = false

const pintar = (elemento, color = 'green') => {
    elemento.style.backgroundColor = color
};
pintar(ele)

ele.addEventListener('click', () => {
    if(!accionClick){
        pintar(ele,'yellow')
    }else{
        pintar(ele,)
    }
    accionClick = !accionClick
})



