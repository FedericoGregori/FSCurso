$(document).ready(function(){

    $(document).ready(function(){
		$(".container img").click(function(){
			var nombre = $(this).attr("alt") + "_big";
            var direccion = nombre + ".jpg";

			$("#imgFull").attr('src',direccion);
            $(".previa").fadeIn();
            
            $(".piefoto").text($(this).attr("title"));
		});
		
		$(".close").click(function(){
			$(".previa").fadeOut();	
		});
	});


});