const Api_URL = 'https://api.themoviedb.org/3';

async function getTrendingMoviesPreview(){

  const res = await fetch(`${Api_URL}/trending/movie/day?api_key=4070f0ad7e0c3d1d4ce51071d9374427`)
  const data = await res.json();
  const movies = data.results;
  console.log({data, movies});
  
  
  movies.map(item=>{
    const container = document.getElementById('sliderContainer');
    const divContenedorSlider = document.createElement('div')
    divContenedorSlider.classList.add('mySlides')
    divContenedorSlider.classList.add('fade')
    const createImg= document.createElement('img')  
    createImg.classList.add('img__slider')
    createImg.setAttribute('src', `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`)
    const textoSlider = document.createElement('div');
    const texto = item.original_title;
    textoSlider.classList.add('text')
    textoSlider.innerHTML=texto
    divContenedorSlider.appendChild(createImg)
    divContenedorSlider.appendChild(textoSlider)
    container.appendChild(divContenedorSlider)
    
    
    
  })

}
getTrendingMoviesPreview()