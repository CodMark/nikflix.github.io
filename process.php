<?php 

    if(isset($_POST['btn-send']))
    {
       $UserName = $_POST['UName'];
       $Email = $_POST['Email'];
       $Subject = $_POST['Subject'];
       $Msg = $_POST['msg'];

       if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
       {
           header('location:chat.php?error');
       }
       else
       {
           $to = "codmark14@gmail.com";

           if(mail($to,$Subject,$Msg,$Email))
           {
               header("location:chat.php?success");
           }
       }
    }
    else
    {
        header("location:chat.php");
    }



?>
