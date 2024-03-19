const dom={
    titles: document.getElementById("titles"),
    gallery: document.getElementById("gallery")
}

let id=sessionStorage.getItem("id");
const drawImgs=(apartments)=>{
    const currentVilla=apartments.find(f=(apartment)=>{return apartment.id==id});

    const title=document.createElement('h1');
    title.innerHTML="גלרית תמונות";

    const subtitle= document.createElement('h2');
    subtitle.innerHTML=currentVilla.name;

    dom.titles.appendChild(title);
    dom.titles.appendChild(subtitle);

    const img= document.createElement('img');
    const img1= document.createElement('img');
    const img2= document.createElement('img');
    const img3= document.createElement('img');
    
    img.src=`../../assets/pictures house/${currentVilla.img}`;
    img1.src=`../../assets/pictures house/${currentVilla.img1}`;
    img2.src=`../../assets/pictures house/${currentVilla.img2}`;
    img3.src=`../../assets/pictures house/${currentVilla.img3}`;

    dom.gallery.appendChild(img);
    dom.gallery.appendChild(img1);
    dom.gallery.appendChild(img2);
    dom.gallery.appendChild(img3);

    img.classList="imgs";
    img1.classList="imgs";
    img2.classList="imgs";
    img3.classList="imgs";
}
calFunc("../../data/data.json", drawImgs);
