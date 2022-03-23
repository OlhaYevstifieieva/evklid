
// burger menu

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    clickableClass: 'dote'
  }

});

// tabs

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      document.querySelectorAll('.tabs__btn').forEach(function(tabContent) {
        tabContent.classList.remove('btn-active')
      })

      document.querySelector(`[data-path="${path}"]`).classList.add('btn-active')
    })
  })
})

// accordion

$( function() {
  $( "#accordion" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true,
     active: false
   });

    $(".refresh").click(function() {
      $( "#accordion" ).accordion({
        collapsible: true,
        active: 0
     });
    })

 })
