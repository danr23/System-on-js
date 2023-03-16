
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru-ru" lang="ru-ru">
<head><meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>Загрузить файлы...</title>
<link href="css/css.css" rel='stylesheet' />
<link rel="stylesheet" type="text/css" href="css/style.css"  />
	</head>
	<body align="center">
	
<h2 align="left"><font color="#323232">Загрузить файлы...</font></h2>
<br><br>	<font color="#cc0000"><em>Если имя загружаемого файла совпадает с именем уже существующего файла, он будет заменен.</em></font><br>
	
		<form id="upload" method="post" action="upload.php" enctype="multipart/form-data">
			<div id="drop">
				Перетащите сюда файлы, которые Вы хотите загрузить на сервер.<br>
				Или укажите файл с помощью кнопки <a>Загрузить</a>
				<input type="file" name="upl" multiple />
			</div>
			<ul>
				<!-- Файлы будут загружаться здесь -->
			</ul>
			<font color="#ffffff">Название суши: </font><input type="text" name="sushi"></input>
		</form>
        
		<!-- JavaScript -->
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.knob.js"></script>

		<!-- jQuery загрузка файлов -->
		<script src="js/jquery.ui.widget.js"></script>
		<script src="js/jquery.iframe-transport.js"></script>
		<script src="js/jquery.fileupload.js"></script>
		
		<!-- Основной JS файл -->
		<script src="js/script.js"></script>
<br>

	</body>
</html>
