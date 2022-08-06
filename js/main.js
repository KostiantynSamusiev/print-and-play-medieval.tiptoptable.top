let mobileLinks = document.querySelectorAll('.mobile-links'),
     webLinks = document.querySelectorAll('.web-links');

for (let i=0; i<mobileLinks.length; i++)
mobileLinks[i].onclick = function () {
    window.scrollTo({
      left:0,
      top: 2700,
      behavior: "smooth"});
      
}

for (let i=0; i<webLinks.length; i++)
webLinks[i].onclick = function () {
    window.scrollTo({
      left:0,
      top: 3700,
      behavior: "smooth"});

      if (window.screen.width >= 1080) {
        window.scrollTo({
          left:0,
          top: 3100,
          behavior: "smooth"});
      }
}

// Slick-gallery
$('.gallery').slick({
    arrows: true,
    dots: true
});

 //Button form
 function closeForm() {
    $('.ordenary-form').removeClass('is-visible');
  }
    $(document).ready(function($) {
    
      /* Contact Form Interactions */
      $('#btnOpenForm').on('click', function(event) {
        event.preventDefault();
    
        $('.ordenary-form').addClass('is-visible');
      });
      
        //close popup when clicking x or off popup
      $('.ordenary-form').on('click', function(event) {
        if ($(event.target).is('#btnCloseForm')) {
          event.preventDefault();
          $(this).removeClass('is-visible');
        }
      });
    });

    
// Burger menu
let icnMenu = document.querySelector('.menu-icon');
let mobileNav = document.querySelector('.mobile-nav');

icnMenu.addEventListener('click', () => {
	icnMenu.classList.toggle('active');
	mobileNav.classList.toggle('is-active');
});

//Dropdown glags
$("#country_selector1").countrySelect({
    defaultCountry: "ua",
    excludeCountries: ['ru','by'],
    responsiveDropdown: true,
    preferredCountries: ["ca", "gb", "us"],
  });

  $("#country_selector2").countrySelect({
    defaultCountry: "ua",
    excludeCountries: ['ru','by'],
    responsiveDropdown: true,
    // preferredCountries: ["ca", "gb", "us"],
  });

    // Automatical download PDF file
    let pdfUrl = "files/DV_print-and-play_manual_cc.pdf";
    
    $('.js-submit-form').on('submit', function (event) {
        event.preventDefault();
        console.log("works!")
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('spiner1').style.display = "inline-block";
        document.getElementById('spiner2').style.display = "inline-block";
        const url = $(this).attr('action'),
        data = $(this).serialize();

        $.ajax({
          type: 'POST',
          url: url,
          data: data,
          success: function(result){
            window.open('thnankyoupage/thank.html', '_self');
            window.open(pdfUrl,  '_blank');
            event.target.reset();
            $('.ordenary-form').removeClass('is-visible');
            
          },
          error: function(error) {
          }
        });
    });





   
   

   


   

   