<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <?php
    
    //PHP an mysql

    $connection = new mysqli("localhost","root","","school");
    $stmt = $connection->prepare("select * from client_id")
    $stmt->exeute();

    $reult = $stmt->get_result();
    while($row = $result->fetch_assoc()){

        echo $rew["client_name"];
    }
    ?>
</body>
</html>