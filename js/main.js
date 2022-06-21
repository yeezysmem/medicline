$(function(){
    $('.banner-slider').slick({
      arrows:false,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay:true,
      autoplaySpeed: 1000
      });

      $('.card').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows:false
            }
          },
          {
            breakpoint: 375,
            settings: {
              arrows:false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              arrows:false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows:false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
        
      });
      
      $('.about-flex').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows:false
            }
          }
        ]
      });

      


  
});