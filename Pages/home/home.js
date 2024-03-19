const dom={
    squares: document.getElementById("squares"),
}


const slides = document.querySelectorAll(".slide");
const details = document.querySelectorAll(".detail");

let maxSlide = slides.length - 1;
let curSlide = 0;
let maxSlide2 = slides.length - 1;
let curSlide2 = 0;
const nextPictures=()=> {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    
  //   move slide by -100%
    slides.forEach((slide, indx) => {
        console.log("slide "+ slide+ ", indx"+indx);
        console.log("curSlide "+curSlide);
        console.log("100 * (indx - curSlide) "+ 100 * (indx - curSlide))
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    

    });
    
      
  };
setInterval(nextPictures,5000);
  
// const nextP=()=> {
//     // check if current slide is the last and reset current slide
//     if (curSlide2 === maxSlide2) {
//       curSlide2 = 0;
//     } else {
//       curSlide2++;
//     }
    
//   //   move slide by -100%
//   details.forEach((detail, indx) => {
//     detail.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
//     })
      
//   };
//   setInterval(nextP,5000);

  const buttomNav=()=>{
   
    const s1= document.createElement('a');
    s1.classList="square";
    s1.id="square1";
    const i1= document.createElement('i');
    i1.classList="fas fa-home";
    s1.appendChild(i1);
    s1.innerHTML+="מעבר לדף הצימרים";

    const s2= document.createElement('a');
    s2.classList="square";
    s2.id="square2";
    const i2= document.createElement('i');
    i2.classList="fas fa-bullhorn";
    i2.style.transform="rotate(-10deg)";
    s2.appendChild(i2);
    s2.innerHTML+="לפרסום צימר באתר שלנו";
    const s3= document.createElement('a');

    
    const i3= document.createElement('i');
    i3.classList="far fa-clipboard";
    s3.classList="square";
    s3.id="square3";
    s3.appendChild(i3);
    s3.innerHTML+="אודות האתר";
    s1.href="../apartments/apartment.html";
    s2.href="../advertisers/advertiser.html";
    s3.href="../about/about.html";


    dom.squares.appendChild(s1);
    dom.squares.appendChild(s2);
    dom.squares.appendChild(s3);
  }
  buttomNav();




  