<?php 
// $user = "nmastrac_alexand";
// 	$pass = "PotatoTomato4$";
// 	$url = "gator4091.hostgator.com";
// 	$db = "nmastrac_db_nammie";
	$user = "root";
	$pass = "root";
	$url = "localhost";
	$db = "db_nammie";

	$link = mysqli_connect($url, $user, $pass, $db); 

	if(mysqli_connect_errno()) {
		printf("Connection Failed: %s\n", mysqli_connect_error());
		exit();
	}
	//this is now connected

if(isset($_GET['allPics'])) {
$allPics = $_GET['allPics'];

$allPicsQ = "SELECT * FROM pieces p, likeness l WHERE p.pieces_id = l.piece_id AND p.pieces_id = '$allPics'";

$getAllPics = mysqli_query($link, $allPicsQ);

// var_dump($getAllPics);

$rows = array();

	while($row = mysqli_fetch_assoc($getAllPics)) {
		$rows[] = $row;
	}
echo json_encode($rows);
}

?>