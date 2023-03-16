<?php
$zhaloba = $_POST['zhaloba'];
$acc = $_POST['account'];
file_put_contents('zhalobi.html', $acc.': '.$zhaloba.'<br><br>'."\n", FILE_APPEND);
echo '
<div align="center">
<h1>Спасибо что поделились своим мнением.</h1>
<button onclick="location.href = \'index.html\'">Назад</button>
</div>';
?>
