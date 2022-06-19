<?php  
    include ('secret.php');
    if(isset($_GET["source"])){
        highlight_file(__file__);
        die;
    }
?>

<!DOCTYPE html>
<html>
<head>
    <title>Juggling Clown</title>
</head>
<body>
    <img src="juggle.gif">
    <h1>Juggling Clown</h1>
    <p>Do you know juggling?</p>
    <form action="index.php">
        <input type="text" name="answer">
        <input type="submit">
    </form>
    <?php  
        if(isset($_GET["answer"])){
            if(strcmp($answer , $_GET["answer"]) == 0){
                echo "<p>Correct! Here's your flag: {$flag}</p>";
            }else{
                echo "<p>Incorrect!</p>";
            }
        }
    ?>
    <p></p>
    <a style="color: white" href="?source">View Sauce</a>
</body>
</html>
