$(document).ready(function(){

  $("#time").click(function(e){
    $("#available").show();

    $(".dropdown").click(function(e){
      e.stopPropagation();
      var time = $(this).html();
      $("#time").val(time);
      $("#time").change();

      $("#available").hide();
    });
  });
  
  $("#party").click(function(){
    $("#availableTables").show();

    $(".party-dropdown").click(function(e){
      e.stopPropagation();        
      var tableSize = $(this).html();
      $("#party").val(tableSize);
      $("#party").change();

      $("#availableTables").hide();
    });
  });

  $("#catering-party").click(function(){
    $("#themes").show();

    $(".theme-dropdown").click(function(e){
      e.stopPropagation();
      var theme = $(this).html();
      $("#catering-party").val(theme);
      $("#catering-party").change();

      $("#themes").hide();
    });
  });

  $(document).mouseup(function (e) { 
    if ($(e.target).closest("#availableTables").length === 0) { 
      $("#availableTables").hide(); 
    }
    if ($(e.target).closest("#available").length === 0) { 
      $("#available").hide(); 
    }
    if ($(e.target).closest("#themes").length === 0) { 
      $("#themes").hide(); 
    }
  });

});