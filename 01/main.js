const APIurl =' https://api.thedogapi.com/v1/images/search?limit=3';


async function callApi(){
    const res = await fetch(APIurl);
    
    const data= await res.json();
    const container = document.querySelector('div.container')
    const img = document.createElement('img')
    
    console.log(data);

    data.map(item=>{
        
        img.className='img'    
        container.appendChild(img)    
        img.src= item.url
            
    })
    
    
    
    
        
    
    

    
}

