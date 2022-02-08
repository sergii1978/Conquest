// slick slider
// $(document).ready(function(){
//   $('.responsive').slick({
//     dots: true,
//     arrows: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }

//     ]
//   });
// });

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object

// owl-carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoHeight:true,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:1,
          nav:true,
          loop:false
      }
  }
})