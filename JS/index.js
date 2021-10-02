const mangaURL = 'https://kitsu.io/api/edge/manga?page[limit]=6&page[offset]=0&sort=ratingRank'

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
           const divContainerCard1 = document.createElement('div');
           divContainerCard1.className = ('container-card-1')
           
           const img = document.createElement('img');
           img.src = manga.attributes.posterImage.medium;
           img.alt = manga.canonicalTitle;
           
           const spanTitle = document.createElement('span');
           spanTitle.className = ('titulo-manga')
           spanTitle.innerText = manga.attributes.canonicalTitle;

           const spanPopularity = document.createElement('span');
           spanPopularity.className = ('popularidad-manga')
           spanPopularity.innerText = manga.attributes.popularityRank

           const status = document.createElement('span')
           status.className = ('status')
           status.innerText = manga.attributes.status

           const capitulos = document.createElement('span')
           capitulos.className = ('capitulos')
           capitulos.innerText = manga.attributes.chapterCount

           const miniContainerCard = document.createElement('div')
           miniContainerCard.className = ('mini-container-cards')


           divContainerCard1.appendChild(img);
           miniContainerCard.appendChild(spanPopularity);
           miniContainerCard.appendChild(status)
           miniContainerCard.appendChild(capitulos)
           divContainerCard1.appendChild(miniContainerCard)
           divContainerCard1.appendChild(spanTitle);

           const divContainerCard2 = document.createElement('div')
           divContainerCard2.className = ('container-card-2')

           const descripcion = document.createElement('p')
           descripcion.innerText = manga.attributes.synopsis;

           divContainerCard2.appendChild(descripcion)

           li.appendChild(divContainerCard1);
           li.appendChild(divContainerCard2)
           
        
           containerMangas.appendChild(li);
       });
   }

 getMangas()

