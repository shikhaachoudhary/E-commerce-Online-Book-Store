SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    SearchForm.classList.toggle('active');
}

let LoginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    LoginForm.classList.toggle('active');
}

document.querySelector('#class-login-btn').onclick = () =>{
    LoginForm.classList.remove('active');
}


window.onscroll = () =>{

    SearchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader,4000)
}

var swiper = new Swiper(".books-slider", {
    loop:true,
    centreSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centreSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centreSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centreSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centreSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });