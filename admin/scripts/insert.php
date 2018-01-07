<?php

	$user = "root";
	$pass = "root";
	$url = "localhost";
	$db = "db_nammie";

	$link = mysqli_connect($url, $user, $pass, $db, "8888"); 

	if(mysqli_connect_errno()) {
		printf("Connection Failed: %s\n", mysqli_connect_error());
		exit();
	}

	$location = $_POST('location');
	$sql = "INSERT INTO test (test_location) VALUES ('$location')"

	if(!mysqli_query($link,$sql)) {
		echo 'not inserted';
	} else {
		echo 'inserted';
	}


?>