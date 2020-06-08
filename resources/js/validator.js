// Form Validation
$(".btn-submit").click(function(e) {
  e.preventDefault();
  if ($('#reservation-bookatable').smkValidate()) {
    if( $.smkEqualPass('#pass1', '#pass2') ) {
      // Code here
      $.smkAlert({
        text: 'Validate!',
        type: 'success'
      });
    } 
  }
});

$(".btn-send").click(function(e) {
  e.preventDefault();
  if ($('#catering-form').smkValidate()) {
    if( $.smkEqualPass('#pass1', '#pass2') ) {
      // Code here
      $.smkAlert({
        text: 'Validate!',
        type: 'success'
      });
    } 
  }
});


var clearOnSubmit = setInterval(clearForms, 1000);
// Form Clear

function clearForms() {
  $(".btn-send").click(function(e) {
    e.preventDefault();
    $("#catering-form").smkClear();
  });

  $(".btn-submit").click(function(e) {
    e.preventDefault();
    $("#reservation-bookatable").smkClear();
  });
}


$("input").change(function() {
  if ($(this).val() != "") {
    $(this).addClass('filled');
  } else {
    $(this).removeClass('filled');
  }
});

$("textarea").change(function() {
  if ($(this).val() != "") {
    $(this).addClass('filled');
  } else {
    $(this).removeClass('filled');
  }
})

$("input[name='phone']").keyup(function() {
  $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d)+$/, "($1)$2-$3"));
});

$("#datepicker").datepicker();
