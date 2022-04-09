<html>
<body>




Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?> <br>
<?php $sub = $_GET["sub"] ?> 
Your subject headline is <?php echo $sub ?> <br>
Your message is: <?php echo $_GET["msg"]  ?> <br>


<?php $subject = "Thanks for submitting your feedback!" ?>

<?php 
$name = $_GET["name"];



?> <br> 


<?php 
//echo "within processing section \n";
if(isset($_GET["submit"])){
    //echo "Submit checked "."\n";

    if($_GET["name"]==""||$_GET["email"]==""||$_GET["sub"]==""||$_GET["msg"]==""){
        echo "Please complete all fields \n.";
    } 
    
    else {
        
        //echo "instantiating variables" ."\n";
        $subject = $_GET["sub"];
        $name = $_GET["name"];
        $email = $_GET["email"];
        $message = "Hello there $name, thanks for submitting your feedback - it is appreciated!"."Here is what you said: \n".$_GET["msg"]; 
        ?> 
        <br> 
        <br> 
        <?php
        echo $message;
        echo "Sending you an email confirmation of your form. ";
        echo "<a href='mailto:" . $email . "?body=" . $message . "'>Click here to send us your feedback in an email directly!</a>"; 
        email($email, $subject, $message);
        
    } 
}      
        ?> 
    



</body>
</html>