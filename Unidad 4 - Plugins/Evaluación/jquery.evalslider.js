/* Buen día profe:
    Tuve muchas dudas con esta consigna, y me costó entender algunos conceptos. Creo que ya manejo la idea con claridad, puesto que ejercité con 2 o 3 casos más. Pero mi sintaxis para manipular las opciones por defecto es las que muestra la documentación oficial de JQuery, puesto que bajando varios plugins aleatorios, me encontré con esta forma de escribirla. Pequeña aclaración de por qué no utilicé la propuesta por su bibliografía. Gracias
*/

jQuery.fn.evalslider = function(options){
    var config = $.extend({
        efecto: 'fadeIn',
        velocidadEfecto: 1000,
        tiempoPausa: 3000,
    }, options);

	this.each(function(){
		$('.imagenes div:gt(0)').hide();
		setInterval(function(){
		  $('.imagenes div:first-child').fadeOut(0)
			 .next('div')[config.efecto](config.velocidadEfecto)
			 .end().appendTo('.imagenes');}, config.tiempoPausa);
	});
    
	return this;
};