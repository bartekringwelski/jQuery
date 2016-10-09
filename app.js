$(document).ready(function() {
    $("h1").text("to-do's");
var counter = 0;

    $('input').on('keypress', function(event) {
        if (event.which === 13) {
            var $value = $('input').val();
            $('ul').append("<li class = 'li' data-counter =" + counter + ">" + $value + "</li>");
            counter++;
            console.log(counter);
            console.log("counter value is: " +$('.li').last().data('counter'))
            $('input').val('');
            $('li').last().append("<button> kill</button>")
        };

        var cache = {};

        $('button').on('click', function() {
            var arg = JSON.stringify(this);
            if (cache[arg]) {
                $(this).parent().remove();
            } else {
                $(this).parent().addClass('strikeThroughAndGray');
                cache[arg] = true;
            }
        });
    });
});
//
