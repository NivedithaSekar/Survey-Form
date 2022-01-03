$('input.rating-radio').click(function() {
    var theNumber = $(this).attr('value');
    //console.log($(this).siblings('label.rating'));
    $(this).siblings('label.rating').each(function() {
      var sibNumber = $(this).attr('for').slice(-1);;
      //console.log($(this).attr('for').slice(-1))
      //console.log(sibNumber,theNumber,sibNumber <= theNumber);
      if (sibNumber <= theNumber) {
        $(this).addClass('on');
      } else {
        $(this).removeClass('on');
      }
    });
  });