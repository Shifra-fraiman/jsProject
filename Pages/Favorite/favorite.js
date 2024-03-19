const dom={
    apartments: document.getElementById("apartments"),
}
const listFavorite= JSON.parse(sessionStorage.getItem('listFavorite')) || [];

const drawFavoriteApartmenrs=(apartments)=>{
    apartments.forEach(a => {
        if(listFavorite.includes(a.id))
           dom.apartments.appendChild(getapartment(a, false, false));
    });
}
calFunc("../../data/data.json",drawFavoriteApartmenrs);
console.log("listFavorite: "+listFavorite);