const menulist = document.querySelector(".menulist")
const menuIcon = document.querySelector(".menuIcon")

menuIcon.addEventListener("click", function () {
  menulist.classList.toggle("show");
  document.body.classList.toggle("overFlowHidden")
  document.querySelector(".menuIcon").classList.toggle("cross")
})
$('.parentBox').slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 1000,
  pauseOnHover: true,
  cssEase: 'linear',
});