let apartmants=[{img:"default", name: "default",  area:"default", place:"default",  description: "default", phone: "default", email:"default", numVilla: "default",numPeople: "default", pairs:"default", family:"default", groups:"default", cost: "default", prestigious: "default", pool: "default"}];
const calFunc=(url,drawApartments=()=>{})=>{ 
  $.ajax({
      url,
      success: ( result ) => {
        console.log(result);
        console.log("hello");
        apartmants=result;
        drawApartments(result);
        
      },
      error: (err) => {
        console.log(err);
        console.log("promblem!");
      }
    });
}
const callFuncWithoutAjax=(func)=>{
  calFunc("../../data/data.json");
  func(apartmants);
}


