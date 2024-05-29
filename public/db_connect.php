<?php
$servername = 'db'
$username = "user"
$password = "password"
$dbname = "todo_list"

$conn = new mysql($servername, $username, $password, $dbname)

if($conn->connect_error){
    die("connection failed" . $conn->connect_error)
}
?>