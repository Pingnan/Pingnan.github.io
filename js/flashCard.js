$(document).ready(function(){
    $("div.fs-card").on({
      mouseleave: function(){
        $(this).children(".solution").hide();
        $(this).children(".problem").show();
      }, 
      click: function(){
        $(this).children(".solution").show();
        $(this).children(".problem").hide();
      }  
    });
  });