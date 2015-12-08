// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btenlistar').on('tap',function(){
		$.ajax({
			type:"POST",
			url:"http://192.168.1.187/perros/buscartodo.php",
			data:"",
			error: function(){alert("Error en la conexion");},
			success: function(respuesta){var producto = JSON.parse(respuesta);
			 $('#contenido').empty();
			for(var $x=0; $x<producto.perfumes.length; $x++)
			{
				$('#contenido').append('<div><div style=" display:inline-block"><div ><img src="http://192.168.1.185/perfumeria/images/imagenes/'+producto.perfumes[$x].clavePerro+'.jpg" style="height:30px; width:30px;"></div><div ><p>Clave: </p>'+ producto.perfumes[$x].clavePerro +'</div></div<div style="display: inline-block"><div ><p>Nombre: </p>'+ producto.perfumes[$x].nombrePerro +'</div><div ><p>Marca: </p>'+ producto.perfumes[$x].colorPerro +'</div><div ><p>Contenido: </p>'+ producto.perfumes[$x].pesoPerro +'</div></div></div><br><hr>');
			}
			$(':mobile-pageconteiner') .pagecontainer('change','#Enlistar',{
				transition: 'pop'});
				
			}
			
			
			
					
    }); 
});
     //buscar
	
	$('#btenlistar').on('tap',function(){
		$.ajax({
			type:"POST",
			url:"http://192.168.1.187/perros/buscartodo.php",
			data:"colorPerro"+$('#txt_buscar').val(),
			error: function(){alert("Error en la conexion");},
			success: function(respuesta){var producto = JSON.parse(respuesta);
			 $('#encontrar').empty();
			for(var $x=0; $x<producto.perfumes.length; $x++)
			{
				$('#encontrar').append('<div><div style=" display:inline-block"><div ><img src="http://192.168.1.185/perfumeria/images/imagenes/'+producto.perfumes[$x].clavePerro+'"></div><div><p>Clave: </p>'+ producto.perfumes[$x].clavePerro +'</div></div><div style="display: inline-block"><div ><p>Nombre: </p>'+ producto.perfumes[$x].nombrePerro +'</div><div ><p>Marca: </p>'+ producto.perfumes[$x].colorPerro +'</div> <div ><p>Contenido: </p>'+producto.perfumes[$x].pesoPerro +'</div></div></div><br><hr>');  
			}
			
			
			}
			
			
	    }); 
});


 }); 
});
		
			
		