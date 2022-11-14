$("document").ready(function(){
    $(".g-toggle-icon").click(function(){
      $(".g-menu-items").slideToggle();
      $(this).hide();
      $(".g-toggle-crose").show();
      return false;
  })
    $(".g-toggle-crose").click(function(){
      $(".g-menu-items").slideToggle();
      $(this).hide();
      $(".g-toggle-icon").show();
      return false;
  })
  // Dropdown
  
  $(".sub-btn").click(function(){
    $('.g-submenu').slideToggle();
});
  $(".sub-btn2").click(function(){
    $('.g-submenu2').slideToggle();
});
  // $('.x').click(function(){
  //   $(this).next('.g-item1').slideToggle(); 
  // });


});