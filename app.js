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
        $(this).counter = 0; //not sure how to make set this outside scope

        $(this).parent().addClass('strikeThroughAndGray')
        $(this).counter++

        if ($this.counter > 0) {
          $(this).parent().remove();
        }


        // else{
        //   console.log("adding class");
        //  $('button').parent().addClass('strikeThroughAndGray')
      //  }

    });
  });
});
