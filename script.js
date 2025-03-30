function showAll() {
    let len = document.getElementById("lenovo2");
    let sam = document.getElementById("samsung2");
    let app = document.getElementById("apple2");
    let btn = document.getElementById("exp");
    let icon1 = document.getElementById("icon1");
    let icon2 = document.getElementById("icon2");

   if (len.style.display === "none") {
    len.style.display="flex";
    sam.style.display="flex";
    app.style.display="flex";
    icon1.style.display="none";
    icon2.style.display="flex";
    btn.innerHTML="Скрыть";
    
   } else {
    len.style.display="none";
    sam.style.display="none";
    app.style.display="none";
    icon1.style.display="flex";
    icon2.style.display="none";
    btn.innerHTML="Показать все";
   }
}
function showHide() {
    let lap = document.getElementById("laptop");
    let pad = document.getElementById("pad");
    let pc = document.getElementById("pc");
    let btn = document.getElementById("techexp");
    let icon1 = document.getElementById("icon3");
    let icon2 = document.getElementById("icon4");

   if (lap.style.display === "none") {
    lap.style.display="flex";
    pad.style.display="flex";
    pc.style.display="flex";
    icon1.style.display="none";
    icon2.style.display="flex";
    btn.innerHTML="Скрыть";
    
   } else {
    lap.style.display="none";
    pad.style.display="none";
    pc.style.display="none";
    icon1.style.display="flex";
    icon2.style.display="none";
    btn.innerHTML="Показать все";
   }
}
function burgerOpen() {
    let slide = document.getElementById("slidemenu");
    let btn = document.getElementById("burger");
    let main = document.getElementById("mainpart");

    if (slide.style.display === "none") {
        slide.style.display="flex";
        main.style.opacity="0.2";
    } else {
        slide.style.display="none";
        main.style.opacity="1";
    }
}
function chatOpen(){
    let feedback = document.getElementById("feedback");
    let main = document.getElementById("mainpart");
    let btn=document.getElementById("modalChat")
    let slide = document.getElementById("slidemenu");

    if (feedback.style.display === "none") {
        feedback.style.display="flex";
        main.style.opacity="0.2";
        slide.style.display="none";
    }

}
function closeFeedback() {
    let feedback = document.getElementById("feedback")
    let main = document.getElementById("mainpart");


    if (feedback.style.display === "flex") {
        feedback.style.display="none";
        main.style.opacity="1";
    }
}
function callOpen() {
    let call = document.getElementById("orderCall")
    let main = document.getElementById("mainpart");
    let slide = document.getElementById("slidemenu");

    if (call.style.display === "none") {
        call.style.display="flex";
        main.style.opacity="0.2";
        slide.style.display="none";
    }
}
function closeOrder() {
    let call = document.getElementById("orderCall")
    let main = document.getElementById("mainpart");


    if (call.style.display === "flex") {
        call.style.display="none";
        main.style.opacity="1";
    }
}
const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slidesPerView: 'auto',
  });
