<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<title>Ejemplo para adjuntar múltiples ficheros</title>
<script language="javascript" type="text/javascript">
	function nuevoFichero() {
	var input = document.getElementsByTagName("input")[0];
	var nuevoInput = input.cloneNode(true);
	input.parentNode.appendChild(nuevoInput);
	}
</script>
</head>

<body>
    <form action="upload.php" method="post" enctype="multipart/form-data">
    	<fieldset><legend>Adjuntar múltiples ficheros</legend>
	    	<input name="ficheros[]" type="file" size="60" >
    	</fieldset>
    	<a href="javascript: nuevoFichero();">Adjuntar otro fichero</a>   
    	<input name="Subir" type="submit" value="Adjuntar" >
    </form>
</body>
</html>
