dom={
    vila: document.getElementById("vila")
}
 // קבלה מ-localStorge את הצימר שהמשתמש העכשוי הכניס
 let myVilla= localStorage.getItem("my-villa");
 //המרה מ-json
 myVilla=JSON.parse(myVilla);
 let image=localStorage.getItem("img");
 myVilla.img=image;
 dom.vila.innerHTML="";
 
 const h1=document.createElement('h1');
 h1.style.font="menu";
 h1.style.color=" rgb(35, 53,67)";
 h1.style.fontSize="40px";
 h1.innerHTML="הפרטים נקלטו בהצלחה, הצימר שלך יראה כך";
 dom.vila.appendChild(h1);
 
 dom.vila.appendChild(getapartment(myVilla,true, false));
 favoriteBtn.disabled="true";
 choiceBtn.disabled="true";

