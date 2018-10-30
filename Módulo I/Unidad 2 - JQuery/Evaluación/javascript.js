$(document).ready(function(){
    
    if ( $("#load").is(":hidden") ) {
        $("#load").slideDown(2000, function(){
            $("#load2").slideDown(2000, function(){
                $("#load3").slideDown(2000, function(){
                    $("#load4").slideDown(2000, function(){
                        $(".content").fadeTo("slow",0.8)
                    })
                })
            })
        })
    }

    $("h2").hover(function(){
        $(".contacto").css("display","inline");
    }, function(){
        $(".contacto").css("display","none");
    })
    
});
