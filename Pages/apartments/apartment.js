const dom ={
    apartments: document.getElementById("apartmants"),
    form: document.getElementById("form"),
    sumSearch: document.getElementById("sumSearch")
    
}

var slidePosition = 1;
form.id="idForm";
//רשימת מועדפים
const listFavorite=[];
//-ציור הצימרים בדפדפן- קבלתם מ json 
const drawApartments=(apartments)=>{
    apartments.forEach(a => {
        dom.apartments.appendChild(getapartment(a, true, false));
    });
    // קבלה מ-localStorge את הצימר שהמשתמש העכשוי הכניס
    let myVilla= localStorage.getItem("my-villa");
    //המרה מ-json
    myVilla=JSON.parse(myVilla);
    let image=localStorage.getItem("img");
    myVilla.img=image;
    dom.apartments.appendChild(getapartment(myVilla,true, false));
}

calFunc("../../data/data.json",drawApartments);

//אלמנט דיאמי- חיפוש צדדי לפי סיווג
// const drawForm=()=>{
    const area=document.createElement('div');
    area.id="area";
    const pArea=document.createElement('p');
    pArea.innerHTML="אזור";
    const north=document.createElement('button');
    north.type="button";
    north.id="north";
    north.value="north";
    north.innerHTML="צפון";
    north.classList="list-group-item list-group-item-action";
    const west=document.createElement('button');
    west.id="west";
    west.type="button";
    west.innerHTML="דרום";
    west.classList="list-group-item list-group-item-action";
    const center=document.createElement('button');
    center.id="center";
    center.type="button";
    center.innerHTML="מרכז";
    center.classList="list-group-item list-group-item-action";
    area.appendChild(pArea);
    area.appendChild(north);
    area.appendChild(west);
    area.appendChild(center);
    

    const sivug=document.createElement('div');
    sivug.id="sivug";
    const pSivug=document.createElement('p');
    pSivug.innerHTML="סיווג";
    const prestigious=document.createElement('button');
    prestigious.id="prestigious";
    prestigious.type="button";
    prestigious.classList="list-group-item list-group-item-action"
    prestigious.innerHTML="צימרים יוקרתיים";
    const pool=document.createElement('button');
    pool.id="pool";
    pool.type="button";
    pool.classList="list-group-item list-group-item-action";
    pool.innerHTML="צימרים עם בריכה";
    sivug.appendChild(pSivug);
    sivug.appendChild(prestigious);
    sivug.appendChild(pool);


    const audience=document.createElement('div');
    audience.id="audience";
    const pAudience=document.createElement('p');
    pAudience.innerHTML="מיועד עבור";
    const family=document.createElement('button');
    family.id="family";
    family.type="button";
    family.classList="list-group-item list-group-item-action";
    family.innerHTML="משפחות";
    const pairs=document.createElement('button');
    pairs.id="pairs";
    pairs.type="button";
    pairs.innerHTML="זוגות";
    pairs.classList="list-group-item list-group-item-action";
    const groups=document.createElement('button');
    groups.id="groups";
    groups.type="button";
    groups.innerHTML="קבוצות";
    groups.classList="list-group-item list-group-item-action";
    audience.appendChild(pAudience);
    audience.appendChild(family);
    audience.appendChild(pairs);
    audience.appendChild(groups);

    const elseBtn=document.createElement('div');
    elseBtn.id="elseBtn";
    elseBtn.type="button";
    const pkind=document.createElement('p');
    pkind.innerHTML="///////";
    //כפתור להגעה לרשימת המועדפים
    const listFavoriteBtn=document.createElement('button');
    listFavoriteBtn.id="listFavoriteBtn";
    listFavoriteBtn.type="listFavoriteBtn";
    listFavoriteBtn.innerHTML="לרשימת המועדפים";
    listFavoriteBtn.classList="list-group-item list-group-item-action";
    const clearAll=document.createElement('button');
    //כפתור לניקוי הכל
    clearAll.id="clearAll";
    clearAll.type="button";
    clearAll.innerHTML="נקה הכל";
    clearAll.classList="list-group-item list-group-item-action";
    elseBtn.appendChild(pkind);
    elseBtn.appendChild(clearAll);
    elseBtn.appendChild(listFavoriteBtn);
    
    dom.form.appendChild(area);
    dom.form.appendChild(sivug);
    dom.form.appendChild(audience);
    dom.form.appendChild(elseBtn);



let arr=[];
let flagg=false;
dom.form.north.onclick=()=>{ 
    dom.apartments.innerHTML="";
    dom.form.north.style.background="rgb(136, 152, 166)";
    arr.forEach(s => {
        //במקרה שיש לי במערך מהנושא area
        if(s.subject=="area"){
            flagg=true;
            //אם יש לי במערך ממש את הכפתור המסוים הזה
            if(s.prop=="north"){
                dom.form.north.style.background="rgb(255, 255, 255)";
                arr.splice(arr.indexOf(s), 1);
            }
            //אם יש לי מסיווג זה אך כפתור אחר
            else{
                dom.form.center.style.background="rgb(255, 255, 255)";
                dom.form.west.style.background="rgb(255, 255, 255)";
                s.prop="north"; 
                s.hebrew="צפון";
            }
                       
        }
    });
    //אם לא היה בכלל כפתור מסיווג זה
    console.log("flagg"+flagg);
    if(!flagg){
         arr.push({subject: "area", prop:"north", hebrew: "צפון"});
         console.log("enter my object");
    }
       
    flagg=false;
    console.log("callserch");
callFuncWithoutAjax(searchAll);
}

dom.form.west.onclick=()=>{
    dom.form.west.style.background="rgb(136, 152, 166)";
    dom.apartments.innerHTML="";
    arr.forEach(s => {
        //במקרה שיש לי במערך מהנושא area
        if(s.subject=="area"){
            flagg=true;
            //אם יש לי במערך ממש את הכפתור המסוים הזה
            if(s.prop=="west"){
                dom.form.west.style.background="rgb(255, 255, 255)";
                arr.splice(arr.indexOf(s), 1);
            }
            //אם יש לי מסיווג זה אך כפתור אחר
            else{
                dom.form.center.style.background="rgb(255, 255, 255)";
                dom.form.north.style.background="rgb(255, 255, 255)";
                s.prop="west"; 
                s.hebrew="דרום";
            }        
        }
    });
    //אם לא היה בכלל כפתור מסיווג זה
    if(!flagg)
        arr.push({subject: "area", prop:"west", hebrew: "דרום"});
    flagg=false;
    callFuncWithoutAjax(searchAll);
}

dom.form.center.onclick=()=>{
    dom.apartments.innerHTML="";
    dom.form.center.style.background="rgb(136, 152, 166)";
    arr.forEach(s => {
        //במקרה שיש לי במערך מהנושא area
        if(s.subject=="area"){
            flagg=true;
            //אם יש לי במערך ממש את הכפתור המסוים הזה
            if(s.prop=="center"){
                dom.form.center.style.background="rgb(255, 255, 255)";
                arr.splice(arr.indexOf(s), 1);
            }
            //אם יש לי מסיווג זה אך כפתור אחר
            else{
                dom.form.north.style.background="rgb(255, 255, 255)";
                dom.form.west.style.background="rgb(255, 255, 255)";
                s.prop="center"; 
                s.hebrew="מרכז";
            }     
        }
    });
    //אם לא היה בכלל כפתור מסיווג זה
    if(!flagg)
        arr.push({subject: "area", prop:"center",hebrew:"מרכז"});
    flagg=false;
    callFuncWithoutAjax(searchAll);
}

const allButtons=()=>{

}

//אין בעיה שיהיה כפתורים מאותו סיווג
dom.form.pool.onclick=()=>{
    dom.apartments.innerHTML="";
    dom.form.pool.style.background="rgb(136, 152, 166)";
    arr.forEach(s => {
        if(s.subject=="sivug" && s.prop=="pool"){
            flagg=true;
            dom.form.pool.style.background="rgb(255, 255, 255)";
            arr.splice(arr.indexOf(s), 1);
        }
    });
    if(!flagg)
        arr.push({subject: "sivug", prop:"pool"});
    flagg=false;
    callFuncWithoutAjax(searchAll);
}

dom.form.prestigious.onclick=()=>{
    dom.apartments.innerHTML="";
    dom.form.prestigious.style.background="rgb(136, 152, 166)";
    arr.forEach(s => {
        if(s.subject=="sivug" && s.prop=="prestigious"){
            flagg=true;
            dom.form.prestigious.style.background="rgb(255, 255, 255)";
            arr.splice(arr.indexOf(s), 1);
        }
    });
    if(!flagg)
        arr.push({subject: "sivug", prop:"prestigious"});
    flagg=false;
    callFuncWithoutAjax(searchAll);
}

dom.form.family.onclick=()=>{
    dom.apartments.innerHTML="";
    dom.form.family.style.background="rgb(136, 152, 166)";
    arr.forEach(s => {
        //במקרה שיש לי במערך מהנושא 
        if(s.subject=="audience"){
            flagg=true;
            //אם יש לי במערך ממש את הכפתור המסוים הזה
            if(s.prop=="family"){
                dom.form.family.style.background="rgb(255, 255, 255)";
                arr.splice(arr.indexOf(s), 1);
            }
            //אם יש לי מסיווג זה אך כפתור אחר
            else{
                dom.form.groups.style.background="rgb(255, 255, 255)";
                dom.form.pairs.style.background="rgb(255, 255, 255)";
                s.prop="family"; 
            }
                       
        }
    });
    //אם לא היה בכלל כפתור מסיווג זה
    if(!flagg){
         arr.push({subject: "audience", prop:"family"});
    }
       
    flagg=false;
    callFuncWithoutAjax(searchAll);
}

dom.form.groups.onclick=()=>{
    dom.apartments.innerHTML="";
    dom.form.groups.style.background="rgb(136, 152, 166)";
    arr.forEach(s => {
        //במקרה שיש לי במערך מהנושא 
        if(s.subject=="audience"){
            flagg=true;
            //אם יש לי במערך ממש את הכפתור המסוים הזה
            if(s.prop=="groups"){
                dom.form.groups.style.background="rgb(255, 255, 255)";
                arr.splice(arr.indexOf(s), 1);
            }
            //אם יש לי מסיווג זה אך כפתור אחר
            else{
                dom.form.family.style.background="rgb(255, 255, 255)";
                dom.form.pairs.style.background="rgb(255, 255, 255)";
                s.prop="groups"; 
            }
                       
        }
    });
    //אם לא היה בכלל כפתור מסיווג זה
    if(!flagg){
         arr.push({subject: "audience", prop:"groups"});
    }
       
    flagg=false;
    callFuncWithoutAjax(searchAll);
}

dom.form.pairs.onclick=()=>{
    dom.apartments.innerHTML="";
    dom.form.pairs.style.background="rgb(136, 152, 166)";
    arr.forEach(s => {
        //במקרה שיש לי במערך מהנושא 
        if(s.subject=="audience"){
            flagg=true;
            //אם יש לי במערך ממש את הכפתור המסוים הזה
            if(s.prop=="pairs"){
                dom.form.pairs.style.background="rgb(255, 255, 255)";
                arr.splice(arr.indexOf(s), 1);
            }
            //אם יש לי מסיווג זה אך כפתור אחר
            else{
                dom.form.family.style.background="rgb(255, 255, 255)";
                dom.form.groups.style.background="rgb(255, 255, 255)";
                s.prop="pairs"; 
            }
                       
        }
    });
    //אם לא היה בכלל כפתור מסיווג זה
    if(!flagg){
         arr.push({subject: "audience", prop:"pairs"});
    }
       
    flagg=false;
    callFuncWithoutAjax(searchAll);
}

let noMatch=false;
let count=0;
const searchAll=(apartments)=>{
    dom.form.clearAll.style.background="rgb(255, 255, 255)";
    apartments.forEach(a => {
        arr && arr.forEach(s => {
            //אם יש אוביקט של מיקום
            if(s.subject=="area"){
                console.log("s.subject"+ s.subject);
                //אם לצימר אין אותו מיקום
                if(a.area!=s.hebrew){
                     console.log("a.area: "+a.area);
                    console.log("s.hebrew: "+s.hebrew);
                    noMatch=true;
                }
                   
            //כל סיווג אחר
            }
            else
            {
                //אם התכונה שווה ל false 
                if(a?.[s.prop]==false)
                    noMatch=true;
            }
        });
        //אם הצימר עונה על כל התנאים
        if(noMatch==false){
            dom.apartments.appendChild(getapartment(a,true,false));
            count++;
        }     
        noMatch=false;
    });
    allSumSearch(count);
    count=0;
}
const allSumSearch=(count)=>{
    sumSearch.innerHTML="";
    const iconSearch=document.createElement('i');
    const br=document.createElement('br');
    iconSearch.classList="fas fa-search";
    iconSearch.id="iconSearch";
    sumSearch.appendChild(iconSearch);
    sumSearch.appendChild(br);
    console.log("count "+ count);
    if(count==39)
        sumSearch.innerHTML+= "סך הנתונים שנמצאו בחיפוש: הכל";
    else
        sumSearch.innerHTML+= "סך הנתונים שנמצאו בחיפוש: "+ count;
    count=0;
}

let clear=false;
dom.form.clearAll.onclick=()=>{
    console.log("clearAll");
    console.log("clear: "+clear);
    if(clear==false){
        dom.form.clearAll.style.background="rgb(136, 152, 166)";
        dom.form.pairs.style.background="rgb(255, 255, 255)";
        dom.form.family.style.background="rgb(255, 255, 255)";
        dom.form.groups.style.background="rgb(255, 255, 255)";
        dom.form.north.style.background="rgb(255, 255, 255)";
        dom.form.west.style.background="rgb(255, 255, 255)";
        dom.form.center.style.background="rgb(255, 255, 255)";
        dom.form.pool.style.background="rgb(255, 255, 255)";
        dom.form.prestigious.style.background="rgb(255, 255, 255)";
        calFunc("../../data/data.json",drawApartments);
        clear=true;
        arr=[];
        flagg=false;
        allSumSearch(39);
    }
    else{
         dom.form.clearAll.style.background="rgb(255, 255, 255)";
         clear=false;
    }  
}

dom.form.listFavoriteBtn.onclick=(event)=>{ 
    dom.form.listFavoriteBtn.style.background="rgb(136, 152, 166)";
    event.preventDefault();
    window.location.href="../Favorite/favorite.html";
}




