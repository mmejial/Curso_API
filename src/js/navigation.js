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
    }else{
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
}
function movieDeatailsPage(){
    console.log('movies deails');
}
