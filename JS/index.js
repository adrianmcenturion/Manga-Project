const mangaURL = 'https://kitsu.io/api/edge/manga?page[limit]=16&page[offset]=0'

const containerMangas = document.getElementById('contenedor-cards')



const getMangas = async () => {
    try {

        const response = await fetch(mangaURL, {
            method: 'GET'
        });

        const json = await response.json();
        const { data } = json;
        renderMangas(data);
        console.log(data)
    } catch( error ) {
        alert(error);
    }
    
};


  const renderMangas = (mangas) => {
      mangas.forEach(manga => {
           const li = document.createElement('li');
           li.className = ('card-mangas')
           const div = document.createElement('div');
           
           const img = document.createElement('img');
           img.src = manga.attributes.posterImage.medium;
           img.alt = manga.canonicalTitle;

           div.appendChild(img);

           const spanTitle = document.createElement('span');
           spanTitle.innerText = manga.attributes.canonicalTitle;

           const spanPopularity = document.createElement('span');
           spanPopularity.innerText = manga.attributes.popularityRank


           li.appendChild(div);
           li.appendChild(spanTitle);
           li.appendChild(spanPopularity);
        
           containerMangas.appendChild(li);
       });
   }

 getMangas()

