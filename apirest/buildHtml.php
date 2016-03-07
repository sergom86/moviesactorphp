<?php


/*
 * Functions Implementations
*
**/

//
function buildHtmlMovies($movies){
	
	$html = '';
	
	
	foreach ($movies as $movie){
		$html .= '<tr>';
			$html .= '<td>'.$movie['title'].'</td>';
			$html .= '<td>'.$movie['release_date'].'</td>';
			$html .= '<td>'.$movie['character'].'</td>';
			if ($movie['poster_path'] != ""){
				$html .= '<td><img src="'.getRouteImages().$movie['poster_path'].'" width="50px" heigth="50px" Alt="Poster" onerror="return imageOnError(this);"></td>';
			}else{
				$html .= '<td></td>';
			}
			
			
		$html .= '</tr>';
	}
	
	
	

	return $html;
}

