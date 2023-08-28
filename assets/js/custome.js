$(function(){
    $btnToggle = $('.btn--toggle');
    $submenuTrigger = $('.submenu--trigger');
    $thirdSubmenuTrigger = $('.third-submenu--trigger');
    
    $btnToggle.on('click', function(e) {
      // e.preventDefault();
      let $target = $( $(e.currentTarget).attr('data-target') );
      $target.toggleClass('showing');
    });
    
    
    $submenuTrigger.on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
    });
    
    $thirdSubmenuTrigger.on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass('active');
    })
  });

  // Owl Slider
$('#banner-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:false,
    dots: true,
    navText: ["<img src='assets/images/arrow-right.svg'>","<img src='assets/images/arrow-left.svg'>"],
    responsive:{
        0:{
            items:1,
            dots: true,
            
        },
        567:{
            items:1,
           
        },
        600:{
            items:1,
            
        },
        768:{
            items:1,
            
        },
        1000:{
            items:1
        }
    }
});


//enquiry
$('#enquiry-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  autoplay: false,
  dots: false,
  navText: ["<img src='assets/images/arrow-right.svg'>","<img src='assets/images/arrow-left.svg'>"], 
  responsive:{
      0:{
          items:1,
          dots: true,
          
      },
      567:{
          items:1,
         
      },
      600:{
          items:1,
          
      },
      768:{
          items:1,
          
      },
      1000:{
          items:1
      }
  }
});

//new arrival
$('#newarrival-slider').owlCarousel({
  loop:true,
  margin:25,
  nav:true,
  autoplay: true,
  dots: false,
  navText: ["<img src='assets/images/arrow-right.svg'>","<img src='assets/images/arrow-left.svg'>"],
  responsive:{
      0:{
          items:1,
          dots: true,
          
      },
      567:{
          items:1,
         
      },
      600:{
          items:1,
          
      },
      768:{
          items:2,
          
      },
      1000:{
          items:3
      }
  }
});

