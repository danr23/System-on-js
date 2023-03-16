<?php


if(isset($_FILES['upl']) && $_FILES['upl']['error'] == 0){
 
    $extension = pathinfo($_FILES['upl']['name'], PATHINFO_EXTENSION);
 
 
    if(move_uploaded_file($_FILES['upl']['tmp_name'], "uploads/".$_POST['sushi'].'.'.$extension)){
        echo '{"status":"success"}';
        file_put_contents('./index.html', "\n".'<strong>'.$_POST['sushi'].': <img src="uploads/'.$_POST['sushi'].'.'.$extension.'" width="128px" height="128px"></img><br>', FILE_APPEND);
        exit;
    }
}
 
echo '{"status":"error"}';
exit;
?>
