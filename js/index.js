var menu_bar = document.getElementsByClassName("menu_bar")[0];
var theNav = document.getElementById("responsiveNav");
var toggButt = document.getElementById("theToggleButt");
var linksRespNav = document.querySelectorAll("#responsiveNav a");

var carouselContainer = document.getElementById("carouselExampleControls");

toggButt.addEventListener("click", main);

function main (){
theNav.classList.toggle("open");
};

function hideMenuOnClick(){
  for (i=0; i<=linksRespNav.length -1; i++){
    linksRespNav[i].addEventListener("click", main);
  }
}

function showCarousel(){
  console.log("lo hace");
  //carouselContainer.classList.add("showing_opacity");
}

function initLayout(){
  hideMenuOnClick();
  setTimeout(showCarousel, 2000);
}

initLayout();