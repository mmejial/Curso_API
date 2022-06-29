
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers:{
    'Content-Type': 'application/json;charset=utf-8',
  },
  params:{
    'api_key':'4070f0ad7e0c3d1d4ce51071d9374427'
  }
})


/* const Api_URL = 'https://api.themoviedb.org/3'; */

async function getTrendingMoviesPreview(){
  const {data,status} = await api.get('trending/movie/day')

  /* const res = await fetch(`${Api_URL}/trending/movie/day?api_key=4070f0ad7e0c3d1d4ce51071d9374427`)
  const data = await res.json(); */
  
  const movies = data.results;
  console.log({data, movies});


  /* console.log(nose); */
  
  movies.map(item=>{
    const container = document.getElementById('sliderContainer');
    const divContenedorSlider = document.createElement('div')
    divContenedorSlider.classList.add('mySlides')
    divContenedorSlider.classList.add('fade')
    const createImg= document.createElement('img')  
    createImg.classList.add('img__slider')
    createImg.setAttribute('src', `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`)
    createImg.setAttribute('alt',item.original_title )
    const textoSlider = document.createElement('div');
    const texto = item.original_title;
    textoSlider.classList.add('text')
    textoSlider.innerHTML=texto
    divContenedorSlider.appendChild(createImg)
    divContenedorSlider.appendChild(textoSlider)
    container.appendChild(divContenedorSlider)
    
    
    
  })

}


/* const nose=  movies.sort((a,b)=>

    
      b.vote_average <a.vote_average
      /* if(b.vote_average<a.vote_average){ */
       
        
      /* } */
      
      

    
    /* )  
    nose.map(item =>{
      const prueba = document.getElementById('prueba')
      const imagenPrueba = document.createElement('img')
      imagenPrueba.setAttribute('src', `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`)
      prueba.appendChild(imagenPrueba)
    }) */ 
async function cardsMoviesPrevew(){
  const {data, status} = await api.get('trending/movie/day')

  const cardsMovies = data.results;
  const container = document.querySelector('.mainCard__Container')
cardsMovies.map(item=>
  {
    const movierCard = createElement('div')
    movierCard.classList.add('movierCard')
    


  })
}
getTrendingMoviesPreview()