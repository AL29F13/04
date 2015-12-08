<?php
 include("config.inc.php");
 
 $consulta="SELECT * FROM boxer WHERE nombrePerro ='{$_POST['nombrePerro']}'";
 $resultado=mysqli_query($conexion,$consulta);
 $env='{"boxer":[';
 $i = false;
 
   while ($fila = mysqli_fetch_array($resultado))
   {
	   if($i)
	   {
		   $env.=',';
	   }
	   $env .= '{"clavePerro":"'.$fila["clavePerro"] .'", "nombrePerro":"'.$fila["nombrePerro"] .'", "colorPerro":"'.$fila["colorPerro"] .'", "pesoPerro":"'.$fila["pesoPerro"] .'", "descripcion":"'.$fila["descripcion"] .'"}';
	   
	   $i=true;
   }
   
  $env .=']}';
  echo $env;
?>
 