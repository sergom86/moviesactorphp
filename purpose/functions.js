/*
 * Functions JS Implementations
 *
 **/
 
//Search Movies by Actor
function searchMoviesByActor(){
	
	idActorHtml = $("#idActor").val();	
	
	if (!idActorHtml){
		return false;
	}
	$.ajax({
		type : "GET",
		contentType : "application/json; charset=utf-8",
		url : '../apirest/searchMoviesByActor.php',
		data : {idActor : idActorHtml},
		success : function(data) {
			
			$('#htmlMovies').html(data);			
			$('#tblMovies').DataTable();
		},
		error : function(data) { // error
			
		}				
	});			
}

// Handle Img Error 
function imageOnError(img) {
	$(img).hide();
	return true;
}