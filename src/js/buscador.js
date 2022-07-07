

async function searchMovieInput(){
  const searchContainer = document.querySelector('.searchContainer')

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
const searchInput = document.querySelector('.input__search');

searchInput.addEventListener('change',searchMovieInput);
searchInput.addEventListener('keyup',searchMovieInput);
/* searchInput.addEventListener('',removeSearchFrame) */

const borrado = document.querySelector('.borrar')
console.log(borrado);

borrado.addEventListener('click',removeSearchFrame)