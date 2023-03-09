$(document).ready(function(){
$("#lista1").click(function(){
    $("#home").show();
  });
});

$(document).ready(function(){
$("#lista2").click(function(){
    $("#about").show();
  });
});

$(document).ready(function(){
$("#lista3").click(function(){
    $("#contact").show();
  });
});

$(document).ready(function(){
$("#lista1").click(function(){
    $("#about,#contact").hide();
  });
});

$(document).ready(function(){
$("#lista2").click(function(){
    $("#home,#contact").hide();
  });
});

$(document).ready(function(){
$("#lista3").click(function(){
    $("#about,#home").hide();
  });
});
