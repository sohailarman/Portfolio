//Name animation code
//Name animation code
//Name animation code



const textf = document.querySelector('.fancy');

const strText = textf.textContent;

const splittext = strText.split("");


textf.textContent = "";

for(let i = 0; i < splittext.length; i++) {
  textf.innerHTML += "<i id='anim'>" + splittext[i] + "</i>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = textf.querySelectorAll('#anim') [char];
  span.classList.add('faded');

  char++


  if(char === splittext.length) {
    complete();
    return;
  }

  

}

function complete() {
  clearInterval(timer);
  timer = null;
}




//Name animation code
//Name animation code
//Name animation code






//Code for getting data from weather api to my website

window.addEventListener("load", () => {
  let long = 24.275791;;
  let lat = 91.466077;
  let temp = document.querySelector('.widh2');
  let wind = document.querySelector('.widh4');
  let icon1 = document.getElementsByClassName('icon');


  // console.log(lat, long)
  const api = `https://api.weatherapi.com/v1/current.json?key=3a2898f0080648e2b3b53104222607&q=${long}, ${lat}&aqi=yes`;

  fetch(api)
  .then(response => {
    return response.json();
  })
  .then(data => {
    // console.log(data);
    const {temp_c, wind_kph} = data.current;
    let {icon} = data.current.condition;
    temp.textContent = temp_c + " C";
    wind.textContent = wind_kph + " kph";

    let replacedIcon = icon.replace("//cdn.weatherapi.com/weather", "Resource/weather");
    
    icon1.src = replacedIcon;

  });


});

//Code for getting data from weather api to my website


 

//This part of code is for the multiple image slider in the website
//This part of code is for the multiple image slider in the website
//This part of code is for the multiple image slider in the website


let slides1 = document.getElementsByClassName("mySlides-fade1");
let slides2 = document.getElementsByClassName("mySlides-fade2");
let slides3 = document.getElementsByClassName("mySlides-fade3");

let dots1 = document.getElementsByClassName("dot1");
let dots2 = document.getElementsByClassName("dot2");
let dots3 = document.getElementsByClassName("dot3");

let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;


showSlides(slideIndex1, slides1, dots1);
showSlides(slideIndex2, slides2, dots2);
showSlides(slideIndex3, slides3, dots3);


function plusSlides1(n) {

  slideIndex1 = slideIndex1 + n;

  if (slideIndex1 > slides1.length) {
    slideIndex1 = 1;
  } else if (slideIndex1 < 1) {
    slideIndex1 = slides1.length;
  }
 
  showSlides(slideIndex1, slides1, dots1);
}


function plusSlides2(n) {

  slideIndex2 = slideIndex2 + n;

  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  } else if (slideIndex2 < 1) {
    slideIndex2 = slides2.length;
  }
 
  showSlides(slideIndex2, slides2, dots2);
}


function plusSlides3(n) {

  slideIndex3 = slideIndex3 + n;

  if (slideIndex3 > slides3.length) {
    slideIndex3 = 1;
  } else if (slideIndex3 < 1) {
    slideIndex3 = slides3.length;
  }
 
  showSlides(slideIndex3, slides3, dots3);
}

function currentSlide1(n) {
  showSlides(slideIndex1 = n, slides1, dots1);
}

function currentSlide2(n) {
  showSlides(slideIndex2 = n, slides2, dots2);
}

function currentSlide3(n) {
  showSlides(slideIndex3 = n, slides3, dots3);
}


function showSlides(n, s, d) {
  
  let i;

  for (i = 0; i < s.length; i++) {
    s[i].style.display = "none";
  }

  for (i = 0; i < d.length; i++) {
    d[i].className = d[i].className.replace(" active", "");
  }

  s[n-1].style.display = "block";
  d[n-1].className += " active";

}


//This part of code is for the multiple image slider in the website
//This part of code is for the multiple image slider in the website
//This part of code is for the multiple image slider in the website



  
























































//First Slideshow

// let slideIndex = 1;

// showSlides(slideIndex);

// function plusSlides1(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide1(n) {
//   showSlides(slideIndex = n);
// }


// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides-fade1");
//   let dots = document.getElementsByClassName("dot1");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}


//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }


//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }


//   slides[slideIndex-1].style.display = "block";

//   dots[slideIndex-1].className += " active";


// }




// //Second Slideshow

// let slideIndex1 = 1;

// showSlides1(slideIndex1);

// function plusSlides1(n) {
//   showSlides1(slideIndex1 += n);
// }

// function showSlides1(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides-fade2");
//   let dots = document.getElementsByClassName("dot2");
//   if (n > slides.length) {slideIndex1 = 1}
//   if (n < 1) {slideIndex1 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex1-1].style.display = "block";
//   dots[slideIndex1-1].className += " active";
// }


// //Third Slideshow

// let slideIndex3 = 1;

// showSlides3(slideIndex3);

// function plusSlides3(n) {
//   showSlides3(slideIndex3 += n);
// }

// function showSlides3(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides-fade3");
//   let dots = document.getElementsByClassName("dot3");
//   if (n > slides.length) {slideIndex3 = 1}
//   if (n < 1) {slideIndex3 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex3-1].style.display = "block";
//   dots[slideIndex3-1].className += " active";
// }



// //Automatic Slideshow

// // slideIndex = 0;
// // showSlides();

// // function showSlides() {
// //   let i;
// //   let slides = document.getElementsByClassName("mySlides-fade");
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";
// //   }
// //   slideIndex++;
// //   if (slideIndex > slides.length) {slideIndex = 1}
// //   slides[slideIndex-1].style.display = "block";
// //   setTimeout(showSlides, 2000); // Change image every 2 seconds
// // }