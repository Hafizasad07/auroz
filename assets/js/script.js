jQuery(".carousel0").owlCarousel({
    autoplay: true,
    rewind: false,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 20, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: true,
    // items: 1,
    responsive: {
      0: { items: 1 },        // 1 item for small screens
      600: { items: 2 },      // 2 items for medium screens
      1000: { items: 4 }      // 3 items for large screens
    }
  });