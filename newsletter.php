<?php 
require_once('Database.php');
$db = new Database();
$dbh = $db->connection;
$query = "INSERT INTO newsletters (email) VALUES ('{$_POST['email']}')";
$sth = $dbh->prepare($query); 
$sth->execute();

if($sth->rowCount() > 0){
	echo 1;
}else{
	echo $sth->errorInfo()[1];
}
?>