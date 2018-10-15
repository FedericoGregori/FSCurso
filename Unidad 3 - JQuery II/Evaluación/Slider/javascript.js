$(document).ready(function(){

var foto1 = $('#foto1');
var foto2 = $('#foto2');
var foto3 = $('#foto3');   

function slide(){
    foto1.delay(800).animate({marginLeft: '600px'},4000, function(){
        $('.i1').css('background', 'white');
        $('.i2').css('background', 'grey');
        foto2.delay(1500).animate({marginLeft: '600px'},4000, function(){
            $('.i2').css('background', 'white');
            $('.i3').css('background', 'grey');
            foto3.delay(1500).animate({marginLeft: '600px'},4000, function(){
                $('.i3').css('background', 'white');
                $('.i1').css('background', 'grey');
                foto1.css('marginLeft','0px');
                foto2.css('marginLeft','0px');
                foto3.css('marginLeft','0px');
                slide();
            })
        })
    });

    $('#texto1').slideUp(3300, function(){
        $('#texto2').slideDown(1500, function(){
            $(this).slideUp(3300, function(){
                $('#texto3').slideDown(1500, function(){
                    $(this).slideUp(4000, function(){
                        $('#texto1').slideDown(1500);
                    });
                });
             });
        });
    });
}

slide();

});