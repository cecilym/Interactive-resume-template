$(document).ready(function(){
  $("#storycontents").hide();
  $("#showstory").show();

  $("#showstory").click(function(){
  $("#storycontents").slideToggle();
  });
  
  $("#experience").hide();
  $("#showexp").show();

  $("#showexp").click(function(){
  $("#experience").slideToggle();
  });
  
  $("#education").hide();
  $("#showedu").show();

  $("#showedu").click(function(){
  $("#education").slideToggle();
  });  
  
  $("#skills").hide();
  $("#showskills").show();

  $("#showskills").click(function(){
  $("#skills").slideToggle();
  });    
});

