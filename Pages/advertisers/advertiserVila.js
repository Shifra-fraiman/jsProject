const dom={
    form: document.form,
    formData: {
        name: document.getElementById("name"),
        place: document.getElementById("place"),
        description: document.getElementById("description"),
        numVilla: document.getElementById("numVilla"),
        numPeople: document.getElementById("numPeople"),
        cost: document.getElementById("cost")
    },
    }




const fileInput = document.getElementById('imageInput');

let file;
fileInput.addEventListener('change', (e) =>{
  file = e.target.files[0];
//   console.log('files[0]: '+e.target.files[0]);
 
})
    

dom.form.onsubmit=(event)=>{
    event.preventDefault();
    console.log(dom.formData.name.value);
    console.log(dom.formData.cost.value);
    let areaHebrew;
    if(document.querySelector('input[name="area"]:checked').value==="north")
        areaHebrew="צפון";
    else{ 
        if(document.querySelector('input[name="area"]:checked').value==="west")
            areaHebrew="דרום";
        else
        areaHebrew="מרכז";
    }

    console.log(document.querySelector('input[name="area"]:checked').value);
    var arrayP=[];
    var checkboxP=document.querySelectorAll('input[name=prestigious]:checked');
    for (let i = 0; i < checkboxP.length; i++) {
       arrayP.push(checkboxP[i].value)
        
    }
    let poolTemp;
    if(checkboxP.length==0)
        poolTemp=false;
    else
        if(checkboxP[0].value=="pool")
            poolTemp=true;

    var checkboxA=document.querySelectorAll('input[name=audience]:checked');
   
    let pairsTemp=false, familyTemp=false, groupsTemp=false;
    for (let i = 0; i < checkboxA.length; i++) {
       if(checkboxA[i].value==="pairs")
            pairsTemp=true;
        if(checkboxA[i].value==="family")
            familyTemp=true; 
        if(checkboxA[i].value==="groups")
            groupsTemp=true;   
    }
    


    const telphone =sessionStorage.getItem("phone");
    const advertiserJSON= localStorage.getItem(telphone);
    const advertiserData= JSON.parse(advertiserJSON);
    const villa={
        id: -1,
        img: "",
        name: dom.formData.name.value,
        area: areaHebrew,
        place: dom.formData.place.value,
        description: dom.formData.description.value,
        phone: telphone,
        email: advertiserData.email,
        numVilla: dom.formData.numVilla.value,
        numPeople: dom.formData.numPeople.value,
        pairs: pairsTemp,
        family: familyTemp, 
        groups: groupsTemp,
        cost: dom.formData.cost.value,
        prestigious: arrayP.length==3,
        pool: poolTemp
    }
    localStorage.setItem("my-villa", JSON.stringify(villa));
   
    const img=document.createElement('img');
    let fileReader = new FileReader();
    console.log("fileReader "+fileReader);
    if(!file) {
        alert('לא נבחר קובץ');
        return;
    }
    //קריאת ה-url, והכנסתו ל-localStorage
    fileReader.readAsDataURL(file);
    console.log("fileReader "+fileReader);
    localStorage.setItem("img", fileReader.result);  
    fileReader.onload = function (){
        img.setAttribute('src', fileReader.result);
        console.log("fileReader.result "+fileReader.result);
        localStorage.setItem("img", fileReader.result);  
        villa.img =  fileReader.result;
        window.location.href="../newVilla/newVilla.html";
    } 
}


