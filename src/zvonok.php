<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta HTTP-EQUIV="Refresh" CONTENT="2; URL=<?php echo $_SERVER['HTTP_REFERER'] ?>">
<style>
  body {
    background: url('../img/t1.png') #fff  no-repeat 50% 0;
  }
</style>
</head>
<body>

<div style="margin-top:20%; text-align: center;">

  <?php 

    $name = $_POST['name']; 
    $phone = $_POST['phone'];
    $mail = $_POST['e-mail']; 
    $to = '0626477@gmail.com'; 
    $title ='Заказан звонок';
    $from='no-reply@mail.ru';  
    // $message = "Имя заказачика: $name, <br> Телефон: $phone, <br> e-mail: $mail";
    $message = "Заказ с сайта Кровати-чердаки, <br> Телефон: $phone";
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: " . $from . "\r\n";
    
    

    
       mail($to, $title, $message, $headers);                  
      echo '<storng style="font-family: Open Sans, Arial, sans-serif;
      font-size:22px;color:#000;" >Ваша заявка отправлена, в течении часа с вами свяжется менеджер</strong>'; 
  
  
  ?>

</script> 
</body>
</html>