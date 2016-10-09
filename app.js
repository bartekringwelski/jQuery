$(document).ready(function() {
    $("h1").text("to-do's");


    //    $('li').append("hey")

    $('input').on('keypress', function(event) {
        if (event.which === 13) {

            var $value = $('input').val();
            $('ul').append("<li>" + $value + "</li>");
            $('input').val('');
            $('li').last().append("<button>kill</button>")

        }



        var counter = 0;
        $('button').on('click', function() {

            $(this).parent().addClass('strikeThroughAndGray');

            if (counter > 0) {
                $(this).parent().remove();
            }

        });
    });
});
