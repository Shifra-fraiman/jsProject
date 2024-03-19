const getapartment=(apartment, favorite, choice)=>{
    const ApartDiv=document.createElement('div');
    ApartDiv.classList.add('apartment');
    ApartDiv.id="ApartDiv";
    //תמונה אחת
    const href= document.createElement('a');
    const img=document.createElement('img');
    if(apartment.id<0){
        img.src=apartment.img; 
        console.log("img: "+img.src);
    }
    else
        img.src=`../../assets/pictures house/${apartment.img}`;
        
    img.id="img";

    img.title="לגלרית התמונות לחץ כאן";
    href.id="href";
    href.appendChild(img);
    ApartDiv.appendChild(href);
    href.onclick=()=>{
        sessionStorage.setItem("id", apartment.id);
    }
    href.href="../gallery/gallery.html";

    const ApartData=document.createElement('div');
    ApartData.id="ApartData";

    ApartDiv.appendChild(ApartData);
    const h3=document.createElement('h3');
    h3.innerHTML=apartment.name;

    const p1=document.createElement('p');
    p1.innerHTML=apartment.area +", "+ apartment.place;

    const info= document.createElement('div');

    const desc= document.createElement('p');
    desc.innerHTML=apartment.description;

    const audience= document.createElement('p');
    audience.innerHTML="מיועד עבור: ";
    if(apartment.family==true)
    audience.innerHTML+=" משפחות";
    if(apartment.pairs==true)
    audience.innerHTML+=" זוגות";
    if(apartment.groups==true)
    audience.innerHTML+=" קבוצות";

    const cost=document.createElement('p');
    cost.innerHTML= " המחיר ללילה: " +apartment.cost;

    info.appendChild(h3);
    info.appendChild(p1);
    info.appendChild(desc);
    info.appendChild(audience);
    info.appendChild(cost);

    ApartData.appendChild(info);

    const phone=document.createElement('p');
    phone.innerHTML="מספר הטלפון: "+ apartment.phone;

    ApartData.appendChild(phone);

    const ul=document.createElement('ul');

    const numVilla=document.createElement('li');
    numVilla.classList="iDiv";
    const iVillaDiv= document.createElement('div');
    const iVilla= document.createElement('i');
    iVilla.classList="fas fa-home";
    iVillaDiv.appendChild(iVilla);
    numVilla.appendChild(iVillaDiv);
    numVilla.innerHTML+=apartment.numVilla+" סוויטות";

    const numPeople=document.createElement('li');
    numPeople.classList="iDiv";
    numPeople.id="numPeopleI";
    const iPeopleDiv= document.createElement('div');
    const iPeople= document.createElement('i');
    iPeople.id="iPeople";
    iPeople.classList="fas fa-user-friends";
    iPeopleDiv.appendChild(iPeople);
    numPeople.appendChild(iPeopleDiv);
    numPeople.innerHTML+=apartment.numPeople+" נפשות";


    if(apartment.pool==true){
        const pool=document.createElement('li');
         pool.classList="iDiv";
         pool.id="poolI";
         const iPoolDiv= document.createElement('div');
         const iPool=document.createElement('i');
         iPool.classList="fas fa-swimming-pool";
         iPool.id="iPool";
         iPoolDiv.appendChild(iPool);
         pool.appendChild(iPoolDiv);
         pool.innerHTML+="בריכה";
         ul.appendChild(pool);
        }

    ul.appendChild(numVilla);
    ul.appendChild(numPeople);

    ApartData.appendChild(ul);
if(choice==false){
     if(favorite==true){
        const favoriteBtn= document.createElement('button');
        favoriteBtn.classList.add('fas', 'fa-heart');
        favoriteBtn.id="favoriteBtn";

        ApartData.appendChild(favoriteBtn);
        favoriteBtn.onclick=()=>{
            listFavorite.push(apartment.id);
            favoriteBtn.disabled="true";
            sessionStorage.setItem("listFavorite", JSON.stringify(listFavorite));
            alert("הווילה נוספה לרשימת המועדפים שלך בהצלחה. לרשימת המועדפים הקש כעת על הכפתור: 'רשימת המועדפים'.");
        }
    }
    else{
        const removeFromFavorite= document.createElement('button');
        removeFromFavorite.innerHTML="להסרה מרשימת המועדפים";
        ApartData.appendChild(removeFromFavorite);
        

        removeFromFavorite.onclick=()=>{
            let index=listFavorite.findIndex(s=> s==apartment.id);
            console.log("index: "+ index);
            if (dom.apartments.hasChildNodes()) {
                dom.apartments.removeChild(dom.apartments.children[index]);
                listFavorite.splice(index,1);
                console.log(listFavorite);
            }
        }
    }
    const choiceBtn= document.createElement('button');
    choiceBtn.innerHTML="לסגירה ותשלום";
    choiceBtn.id="choiceBtn";
    ApartData.appendChild(choiceBtn);
    choiceBtn.onclick=()=>{
        sessionStorage.setItem("choiceVilla",JSON.stringify(apartment.id));
        sessionStorage.setItem("from", JSON.stringify("../apartments/apartment.html"));
        window.location.href="../choice/choice.html";
    }
}
  
    return ApartDiv;
}