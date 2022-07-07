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

    console.log('search');
    console.log(mainButton);
}
function movieDeatailsPage(){
    
    console.log('movies deails');
    slider.classList.add('inactive')
    aboutContainer.classList.add('inactive')

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
