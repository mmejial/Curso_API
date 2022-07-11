window.addEventListener('load', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator(){
    console.log({location});
    if(location.hash.startsWith('#trends') ){
        trendsMoviesPage();

    }else if(location.hash.startsWith('#search') ){

        searchPage();
    }else if(location.hash.startsWith('#movie=')){
        movieDeatailsPage();
    }else if(location.hash.startsWith('#categories=')){
        movieCategoriesPage()
    }
    else{
        homePage();
    }
    
}

function trendsMoviesPage(){
    console.log('trends');
}


function homePage(){
    console.log('Home');
}

function searchPage(){

    

    const [_,busqueda] = location.hash.split('=')
    
    const busquedasinnada= busqueda.split('%20').join('-')
        console.log(typeof(busquedasinnada));
    console.log(busquedasinnada);
    getMoviesBySearch( busquedasinnada)
    
    
}
function movieDeatailsPage(){
    
    console.log('movies deails');
    slider.classList.add('inactive')
    aboutContainer.classList.add('inactive')
    cardsConntainer.classList.add('inactive')
    sinopsisPageContainer.classList.remove('inactive')

    const [_,moviedata] = location.hash.split('=');
    const [movieId,movieName] = moviedata.split('-')
   /*  
    const movie_id = parseInt(movieId)
    console.log('id de la pelicula'); */
    console.log(movieId);
    
    movieDetailsPage(movieId)

}
function movieCategoriesPage(){
    console.log('categories');
    
    slider.classList.add('inactive')

    const titlecardMod = document.querySelector('.cards__tittle')
    
    const [_,categoryData] =location.hash.split('=');
    const [categoryId,categoryname] = categoryData.split('-');

    titlecardMod.innerHTML = categoryname
     getMoviesByCategorie(categoryId) 

}
