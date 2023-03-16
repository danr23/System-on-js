<?php
$otziv = $_POST['input'];
$account = $_POST['accountInp'];
file_put_contents('otzivi.html', $account.': '.$otziv."<br><br>", FILE_APPEND);
echo '
<script>
location.href = \'index.html\';
</script>
';
?>
