$(document).ready(function() {
    $("h1").text("to-do's");

    $("h1").after('<button id ="clear-all" >clear all</button');

    $('#clear-all').on('click', function(){
      $('ul').remove();
      $('input').after('<ul id = "firstID"></ul>')
    })


var counter = 0;

    $('input').on('keypress', function(event) {
        if (event.which === 13) {
            var $value = $('input').val();
        //    $('input').after('<ul id = "firstID"></ul>')
           $('ul').append("<li class = 'li' data-counter =" + counter + ">" + $value + "</li>")


            counter++;
            $('input').val('');
            $('li').last('.li').append("#" +$('.li').last().data('counter'))
            $('li').last('.li').append('<button class="del">del</button>')
            $('li').last('.li').animate({opacity: '1.0'}, 150);

        };

        var cache = {};

        $('.del').on('click', function() {
            var arg = JSON.stringify(this);
            if (cache[arg]) {
                $(this).parent().remove()
            } else {
                $(this).parent().addClass('strikeThroughAndGray');
                cache[arg] = true;
            }
        });

    });
});
//
