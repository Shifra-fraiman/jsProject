const dom={
    villaChoice: document.getElementById("villaChoice"),
    choiceForm: document.getElementById("choiceForm"),
    back: document.getElementById("back"),
}
let villa={};
const drawApartment=(apartments)=>{
    let villaId= JSON.parse(sessionStorage.getItem("choiceVilla"));
    apartments.forEach(a => {
        if(a.id==villaId){
            dom.villaChoice.appendChild(getapartment(a,false, true));
            villa= a;
            console.log(villa);
        }
    });
    createFormChoice();    
}


calFunc("../../data/data.json",drawApartment);

const createFormChoice=()=>{
    const title= document.createElement('legend');
    title.innerHTML="נא הכנס את פרטיך לסגירה ותשלום"
    dom.choiceForm.appendChild(title);
    const bigDiv= document.createElement('div');
    bigDiv.classList="mb-3";
    const divFirstName= document.createElement('div');
    divFirstName.classList="form-label";
    const firstName= document.createElement('input');
    firstName.classList="form-control";
    firstName.type="text";
    const labelFirstName= document.createElement('label');
    labelFirstName.innerHTML="שם פרטי";
    
    bigDiv.appendChild(labelFirstName);
    bigDiv.appendChild(divFirstName);
    divFirstName.appendChild(firstName);
    dom.choiceForm.appendChild(bigDiv);
    

    const bigDiv2= document.createElement('div');
    bigDiv2.classList="mb-3";
    const divLastName= document.createElement('div');
    divLastName.classList="form-label";
    const lastName= document.createElement('input');
    lastName.classList="form-control";
    lastName.type="text";
    const labelLastName= document.createElement('label');
    labelLastName.innerHTML="שם משפחה";
    
    bigDiv2.appendChild(labelLastName);
    bigDiv2.appendChild(divLastName);
    divLastName.appendChild(lastName);
    dom.choiceForm.appendChild(bigDiv2);


    const bigDiv3= document.createElement('div');
    bigDiv3.classList="mb-3";
    const divVillaName= document.createElement('div');
    divVillaName.classList="form-label";
    const villaName= document.createElement('input');
    villaName.classList="form-control";
    const labelVillaName= document.createElement('label');
    labelVillaName.innerHTML="הצימר שבחרת:";
    console.log("form: "+villa);
    villaName.value=villa.name;
    villaName.setAttribute('readonly', true);
    
    bigDiv3.appendChild(labelVillaName);
    bigDiv3.appendChild(divVillaName);
    divVillaName.appendChild(villaName);
    dom.choiceForm.appendChild(bigDiv3);


    const bigDiv4= document.createElement('div');
    bigDiv4.classList="mb-3";
    const divPhone= document.createElement('div');
    divPhone.classList="form-label";
    const phone= document.createElement('input');
    phone.classList="form-control";
    phone.type="number";
    const labelPhone= document.createElement('label');
    labelPhone.innerHTML="מספר טלפון";
    
    bigDiv4.appendChild(labelPhone);
    bigDiv4.appendChild(divPhone);
    divPhone.appendChild(phone);
    dom.choiceForm.appendChild(bigDiv4);
    
    const bigDiv5= document.createElement('div');
    bigDiv5.classList="mb-3";
    const divNumVilla= document.createElement('div');
    divNumVilla.classList="form-label";
    const numVilla= document.createElement('input');
    numVilla.classList="form-control";
    numVilla.type="number";
    const labelNumVilla= document.createElement('label');
    labelNumVilla.innerHTML="מספר לילות";
    
    bigDiv5.appendChild(labelNumVilla);
    bigDiv5.appendChild(divNumVilla);
    divNumVilla.appendChild(numVilla);
    dom.choiceForm.appendChild(bigDiv5);

    const bigDiv6= document.createElement('div');
    bigDiv6.classList="mb-3";
    const divDate= document.createElement('div');
    divDate.classList="form-label";
    const date= document.createElement('input');
    date.classList="form-control";
    date.type="date";
    const labelDate= document.createElement('label');
    labelDate.innerHTML="מתאריך";
    
    bigDiv6.appendChild(labelDate);
    bigDiv6.appendChild(divDate);
    divDate.appendChild(date);
    dom.choiceForm.appendChild(bigDiv6);
  
    const bigDiv7= document.createElement('div');
    bigDiv7.classList="mb-3";
    const divDate2= document.createElement('div');
    divDate2.classList="form-label";
    const date2= document.createElement('input');
    date2.classList="form-control";
    date2.type="date";
    const labelDate2= document.createElement('label');
    labelDate2.innerHTML="עד תאריך";
    
    bigDiv7.appendChild(labelDate2);
    bigDiv7.appendChild(divDate2);
    divDate2.appendChild(date2);
    dom.choiceForm.appendChild(bigDiv7);
  

    const label=document.createElement('label');
    label.innerHTML="בחר את אופן התשלום הנוח עבורך:";
    const div= document.createElement('div');
    const op1= document.createElement('input');
    op1.name="wayPay";
    const label1= document.createElement('label');
    label1.innerHTML=" מזומן במקום לבעל הצימר";
    op1.type="radio";
    op1.value="cash";
    
    const op2= document.createElement('input');
    op2.type="radio";
    op2.name="wayPay";
    op2.value="visa";
    const label2= document.createElement('label');
    label2.innerHTML="אשראי דרך האתר";
    dom.choiceForm.appendChild(label);

    div.appendChild(label1);
    div.appendChild(op1);
    div.appendChild(label2);
    div.appendChild(op2);
    dom.choiceForm.appendChild(div);

    div.onclick=()=>{
        op2.disabled="true";
        if(document.querySelector('input[name="wayPay"]:checked').value==="visa"){
            const divVisa= document.createElement('div');
            const divNumVisa= document.createElement('div');
            const inputNumVisa=document.createElement('input');
            inputNumVisa.type="number";
            inputNumVisa.placeholder="מספר אשראי";
            divNumVisa.appendChild(inputNumVisa);

            const divValidity= document.createElement('div');
            const inputValidity=document.createElement('input');
            inputValidity.type="number";
            inputValidity.placeholder="תוקף";
            divValidity.appendChild(inputValidity);

            const divThreeNum= document.createElement('div');
            const inputThreeNum=document.createElement('input');
            inputThreeNum.type="number";
            inputThreeNum.placeholder="שלוש ספרות בגב הכרטיס";
            divThreeNum.appendChild(inputThreeNum);

            divVisa.appendChild(divNumVisa);
            divVisa.appendChild(divValidity);
            divVisa.appendChild(divThreeNum);

            dom.choiceForm.appendChild(divVisa);
        }
    }

   const button=document.createElement('button');
   button.type="submit";
   button.classList="Btn";
   button.innerHTML="אישור ושליחה";

   const buttonReset=document.createElement('button');
   buttonReset.type="reset";
   buttonReset.classList="Btn";
   buttonReset.innerHTML="איפוס הטופס";
    dom.choiceForm.appendChild(button);
    dom.choiceForm.appendChild(buttonReset);

    choiceForm.onsubmit=()=>{
        alert("להתראות ובהצלחה!");
    }
}

back.onclick=()=>{
    const location=JSON.parse(sessionStorage.getItem("from"));
    window.location.href=location;
}
