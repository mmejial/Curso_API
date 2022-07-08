

async function searchMovieInput(){
  

  searchContainer.classList.remove('inactive')

  /*   const datos = [];
    datos.push(...movieResults); */

    console.log('se escribe algo');


    
}

async function removeSearchFrame(){
  const searchContainer = document.querySelector('.searchContainer')

  searchContainer.classList.add('inactive')

  console.log('se borro');

  /*   const datos = [];
    datos.push(...movieResults); */


    
}

/* function pruebaEscrito(){
  const inputBuscar= document.querySelector('.input__search')

  console.log('masomenos');
  console.log(inputBuscar.value);
} */
const searchInput = document.querySelector('.input__search');
/* const valorbusqueda =toString(inputBuscar.value) */
searchInput.addEventListener('change',()=>{
  
  location.hash = `search=${inputBuscar.value}`
});
searchInput.addEventListener('keyup',()=>{
  
  location.hash = `search=${inputBuscar.value}`
});
/* searchInput.addEventListener('',removeSearchFrame) */

const borrado = document.querySelector('.borrar')
console.log(borrado);

borrado.addEventListener('click',removeSearchFrame)