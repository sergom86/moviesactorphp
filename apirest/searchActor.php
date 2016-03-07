<?php
header('Content-Type: application/json');
include 'parameters.php';
//Output JSON Actor Information
$query = $_GET['query'];
$response = file_get_contents(getRouteSearhActor($query));
echo $response;