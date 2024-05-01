//class selector
const row = document.querySelector('.row');
const response = fetch("https://api.disneyapi.dev/character");
//fetch and promise
response
  .then((data) =>data.json())
  .then((result) =>
    result.data.forEach((element) => {
      const col =document.createElement("div");
      col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
      //template literal 
      col.innerHTML = `  
        <div class ="card h-100">
        <div class = "card-header">
        <h5 class = "card-title text-center">${element.name}</h5>
        </div>
        <div class="img-box">
        <img src ="${element.imageUrl}" class="card-img-top" alt="country image"/>
        </div>
        <div class="card-body">
        <div class="card-text text-center">Films:${element.films.length !==0 ? element.films:"No movie"}</div>
        <div class="card-text text-center">Tvshows:${element.tvShows.length !==0 ? element.films:"No tvshows"}</div>
        <div class="card-text text-center">Shortfilms:${element.shortFilms.length !==0 ? element.films:"No shortfilms"}</div>
    

<div>
<div>
        
`;
//append
    row.append(col);
    
})
  )
.catch((error)=>console.log(error))