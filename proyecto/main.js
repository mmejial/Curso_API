console.log('Hello, world')

const API_URL_search = 'https://api.thedogapi.com/v1/images';
const API_URL_favorite = 'https://api.thedogapi.com/v1/favourites';


const API_KEY ='2e45e3d2-a930-4096-a770-a6915c95e48a'
const spanError = document.getElementById('error')

async function loadrandomDogs() {
  const res = await fetch(`${API_URL_search}/search?limit=2&`);
  const data = await res.json();

  console.log(data[0]);
 if(res.status !==200){
   
  
  
    
 }
    const img1 = document.getElementById('img1');
    const btn1 = document.getElementById('btn1')
    const img2 = document.getElementById('img2');
    const btn2 = document.getElementById('btn2')
    
    
    img1.src = data[0].url;
    img2.src = data[1].url;
    
     btn1.onclick = ()=>saveFavoriteDogos(data[0].id)
     btn2.onclick =  ()=>saveFavoriteDogos(data[1].id) 
 
}

async function loadFavoriteDogos(){
    const  res = await fetch(`${API_URL_favorite}`,{
      method: 'GET',
      headers:{
        'x-api-key': API_KEY
      },
});
    const data = await res.json()
    

    if(res.status !==200){
      spanError.innerHTML = "Hubo un error al cargar los dogos"
  }else{
    const favoritesDogosSection = document.getElementById('favoritesDogos')
    favoritesDogosSection.innerHTML="";
    const h2 = document.createElement('h2');
    const h2Text = document.createTextNode('Dogos favoritos')
    h2.appendChild(h2Text);
    favoritesDogosSection.appendChild(h2)
    

    data.map(item=> 
      {
        
        const articleCreate = document.createElement('article');
        const imgFavoriteDogos = document.createElement('img');
        const btnFavoriteDogos = document.createElement('button');
        const btnText = document.createTextNode('Eliminar Dogo fravorito');

        btnFavoriteDogos.appendChild(btnText);
        btnFavoriteDogos.onclick = ()=> deleteFavorite(item.id)
        imgFavoriteDogos.src = item.image.url 
        imgFavoriteDogos.className='prueba'

        articleCreate.appendChild(imgFavoriteDogos);
        articleCreate.appendChild(btnFavoriteDogos);

        favoritesDogosSection.appendChild(articleCreate)

      })
    
  }
}

 async function saveFavoriteDogos(id){
  const res = await fetch(`${API_URL_favorite}`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      'x-api-key': API_KEY
    },
    body: JSON.stringify({
      image_id: id
    })
  })
  
   const data = await res.json();

  console.log('Save')
  console.log(res)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
} 

loadFavoriteDogos()

} 


async function deleteFavorite(id){
  const res = await fetch(`${API_URL_favorite}/${id}`, {
    method: 'DELETE',    
    headers:{
      'x-api-key': API_KEY
    }
  })
  
   if(res.status !== 200){
     spanError.innerHTML = "Hubo un error en el borrado"
   }else{
     console.log('borrado con exito');
     loadFavoriteDogos()
   }
}
 async function uploadFoto(){
   const form = document.getElementById('uploadingform');
   const formData = new FormData(form);

   console.log(formData.get('file'));
  const res = await fetch(`${API_URL_search}/upload`,{
    method: 'POST',
    headers:{
      /* 'content-type': 'multipart/form-data', */
      'x-api-key': API_KEY,
    },
    body: formData
  })

  const data = await res.json();

  if(res.status !== 201){
    spanError.innerHTML = `Hubo un error al subir perrito: ${res.status} ${data.message}`
    console.log({data});
  }else{
    console.log('perrito agregado');
    console.log({ data });
  console.log(data.url);
  saveFavoriteDogos(data.id)
  }
 }




loadrandomDogs()
loadFavoriteDogos()



