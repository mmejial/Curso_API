console.log('Hello, world')

const API_URL_search = 'https://api.thedogapi.com/v1/images/search?limit=3&api_key=2e45e3d2-a930-4096-a770-a6915c95e48a';
const API_URL_favorite = 'https://api.thedogapi.com/v1/images/favourites?limit=3&api_key=2e45e3d2-a930-4096-a770-a6915c95e48a';

const spanError = document.getElementById('error')

async function loadrandomDogs() {
  const res = await fetch(API_URL_search );
  const data = await res.json();

  
 if(res.status !==200){
    
 }else{
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
 }
}

async function favoriteDogos(){
    const  res = await fetch(API_URL_favorite);
    const data = await res.json();
console.log(data);

}


loadrandomDogs();
favoriteDogos();
