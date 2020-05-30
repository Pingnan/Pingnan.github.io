$(document).ready(function(){
  $("button").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).siblings(".solution").hide();
      $(this).siblings(".problem").show();
    }, 
    click: function(){
      $(this).siblings(".solution").show();
      $(this).siblings(".problem").hide();
    }  
  });
});
