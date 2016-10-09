$(document).ready(function() {
    $("h1").text("to-do's");

    $('input').on('keypress', function(event) {
        if (event.which === 13) {
            var $value = $('input').val();
            $('ul').append("<li>" + $value + "</li>");
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
