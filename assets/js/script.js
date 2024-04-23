
function opeNav(){
  document.getElementById("navbar").classList.toggle("start-0")
  document.body.classList.toggle("overFlowHidden")
  document.querySelector(".menuIcon").classList.toggle("cross")
}
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

$('.responsive').slick({
  dots: true,
  infinite: true,
  centerMode:true,
  CenterPadding:"60px",
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:false,
        CenterPadding:"60px",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//      Accordion

const accordionHead = document.querySelectorAll(".accordionHead");
 accordionHead.forEach((e) => {
   e.addEventListener("click", () => { 
  const activeAccordion = document.querySelector(".active")
   e.parentElement.classList.toggle("active")
    activeAccordion && activeAccordion.classList.remove("active") }) })

    $(document).ready(function () {
      $('.show_plan').on('click', function () {
          $('.show_plan').removeClass('active');
          $(this).addClass('active');
      })
    });
    const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show"); 
    window.addEventListener("scroll", function () {
      if (window.scrollY >600) {
          topBtn.classList.add("show");
      } else {
          topBtn.classList.remove("show");
      } 
  })
  topBtn.addEventListener("click", function () {
      document.documentElement.scrollTop = 0;
  })