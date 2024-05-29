<?php

include "db_connect.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $task = htmlspecialchars($_POST['task'])

    $sql = "INSERT INTO tasks (tak) VALUES ('$task')"

    if($conn->query($sql) === TRUE){
        echo "New task created successfully";
    } else{
        echo "Error: " . $sql . "<br>" . $conn->error
    }

    $conn->close()
}
?>