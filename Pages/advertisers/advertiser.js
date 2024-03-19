const dom={
    form: document.form,
    formData: {
        firstName: document.getElementById("firstName"),
        lastName: document.getElementById("lastName"),
        phone: document.getElementById("phone"),
        email: document.getElementById("email"),
        address: document.getElementById("address"),
        addresInfo:{
            city: document.getElementById("city"),
            street: document.getElementById("street"),
            number: document.getElementById("number")
        },
        visa: document.getElementById("visa"),
        visaInfo:{
            numVisa: document.getElementById("numVisa"),
            validity: document.getElementById("validity"),
            threeNum: document.getElementById("threeNum")
        }
    }
}


dom.form.onsubmit=(event)=>{
    event.preventDefault();
    const advertiser={
        firstName: dom.formData.firstName.value,
        lastName: dom.formData.lastName.value,
        phone: dom.formData.phone.value,
        email: dom.formData.email.value,
        addresInfo:{
            city: dom.formData.addresInfo.city.value,
            street: dom.formData.addresInfo.street.value,
            number:dom.formData.addresInfo.number.value,
        },
        visaInfo:{
            numVisa: dom.formData.visaInfo.numVisa.value,
            validity: dom.formData.visaInfo.validity.value,
            threeNum: dom.formData.visaInfo.threeNum.value,
        }
    }
    console.log(advertiser.firstName);
    console.log(advertiser.visaInfo.numVisa);
    localStorage.setItem(advertiser.phone, JSON.stringify(advertiser));
    sessionStorage.setItem("phone", advertiser.phone);
    window.location.href="./advertiserVila.html";
}



