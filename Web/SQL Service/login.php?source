<?php
    include ("config.php");
    $conn = new mysqli("localhost", $dbuser, $dbpass, $dbname);
    if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
    }
    if(isset($_GET["source"])){
        highlight_file("login.php");
        die();
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Login</title>
  <!-- Add ?source to show the source! -->
  <!-- Bootstrap core CSS -->
  <link href="./bootstrap.min.css" rel="stylesheet">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <a class="navbar-brand" href="#">Sequel Database Service</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.php">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="signup.php">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  

  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <?php  
            $output = '';
            if (isset($_GET["email"]) && isset($_GET["password"])) {

                // Delete keywords to prevent SQL injection!
                $email = str_ireplace("OR","",$_GET["email"]);
                $email = str_ireplace("AND","",$email);
                $email = str_ireplace("SELECT","",$email);

                $pass = str_ireplace("OR","",$_GET["password"]);
                $pass = str_ireplace("AND","",$pass);
                $pass = str_ireplace("SELECT","",$pass);

                $sql = "SELECT email, password FROM users WHERE email = '{$email}' and password = '{$pass}'";
                $result = $conn->query($sql);
                if(!$result){
                    $output = "<h5 class='text-danger'>Error occurred</h5>";
                }
                else{
                    if ($result->num_rows > 0) {
                        echo "<h1 class='mt-5'>Welcome Admin!</h1><p>Flag: {$flag}";
                        die();
                    } else {
                        $output = "<p class='text-danger'>Wrong email or password!</p>";
                    }
                }
            }
        ?>
        <h1 class="mt-5">Login</h1>
        <form action="login.php" method="GET">
          <label for="email" class="sr-only">Email address</label>
          <input type="text" name="email" class="form-control mt-3" placeholder="Email address" required autofocus>
          <label for="password" class="sr-only">Password</label>
          <input type="password" name="password" class="form-control mt-2" placeholder="Password" required>
          <button class="btn btn-lg btn-primary btn-block mt-2" type="submit">Login</button>
        </form>
        <?php
            if($output){
                echo $output;
            }
        ?>
        </div>
    </div>
  </div>

  <!-- Bootstrap core JavaScript -->
  <script src="https://code.jquery.com/jquery-3.4.1.slim.js" integrity="sha256-BTlTdQO9/fascB1drekrDVkaKd9PkwBymMlHOiG+qLI=" crossorigin="anonymous"></script>

</body>

</html>
