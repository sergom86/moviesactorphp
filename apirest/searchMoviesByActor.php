<?php

include 'parameters.php';

//Output HTML Movies by Actor
$idActor = $_GET['idActor'];
include 'buildHtml.php';
$response = file_get_contents(getRouteSearhMovies($idActor));
$decodeJson = json_decode($response,true);
$movies = $decodeJson['cast'];

echo buildHtmlMovies($movies);


