$(document).ready(function() {
    $("h1").text("to-do's");


//    $('li').append("hey")

    $('input').on('keypress', function(event) {
      if (event.which === 13) {

        var $value = $('input').val();
        $('ul').append("<li>"+$value+"</li>");
        $('input').val('');
        $('li').last().append("<button>kill</button>")

      }



  $('button').on('click', function() {

    var counter = 0;

      $('button').on('click', function() {
        console.log(counter);

        $(this).parent().addClass('strikeThroughAndGray');
        counter++;

        if (counter > 0) {
          $(this).parent().remove();
        }


        // else{
        //   console.log("adding class");
        //  $('button').parent().addClass('strikeThroughAndGray')
      //  }

    });
  });
});
});
