// $(document).ready(function(){
//   $('#menu').click(function(){
//     $(this).toggleClass('fa-times');
//     $('header').toggleClass('toggle');
//   });

//   $(window).on('scroll load',function(){
//     $('#menu').removeClass('fa-times');
//     $('header').removeClass('toggle');

//     if($(window).scrollTop() > 0){
//       $('.top').show();
//     }else{
//       $('.top').hide();
//     }
//   });

//   // smooth scrolling 
//   $('a[href*="#"]').on('click',function(e){
//     e.preventDefault();
//     $('html, body').animate({
//       scrollTop : $($(this).attr('href')).offset().top,
//     },
//       500, 
//       'linear'
//     );
//   });

// });

// let progressSpans = document.querySelectorAll(".the-progress span");
// let section = document.querySelector(".my-skills");

// let nums = document.querySelectorAll(".stats .number");
// let statsSection = document.querySelector(".stats");
// let started = false; // Function Started ? No

// window.onscroll = function () {
//     // Skills Animate Width
//     if (window.scrollY >= section.offsetTop - 250) {
//       progressSpans.forEach((span) => {
//         span.style.width = span.dataset.width;
//       });
//     }
// }


