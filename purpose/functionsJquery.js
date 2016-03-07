/*
 * jQuery Implementations
 *
 **/

$(function() {
	
	/*
	//Set up the autocomplete jQuery - Plus
	*/
	$("#descActor").autocomplete({
		source : function(request, response) {
			
			$.ajax({
				type : "GET",
				contentType : "application/json; charset=utf-8",
				url : '../apirest/searchActor.php',
				data : {query : request.term},
				success : function(data) {
					response(data.results);
					},
				error : function(data) { // error
					alert(data);
				}				
			});			
		},
		select : function(event, ui, scope) {
			
			$("#descActor").val(ui.item.name);
			$("#idActor").val(ui.item.id);	
			searchMoviesByActor();
			return false;
		}
	}).autocomplete("instance")._renderItem = function(ul, item) {
		return $("<li>").append("<a>" + item.name + "</a>").appendTo(ul);
	};
	
	//Click Search Movies
	$( "#btnSearch" ).click(function() {
		searchMoviesByActor();
		});

	// CLick Clean Screen
	$( "#btnClean" ).click(function() {		
		$("#descActor").val('');
		$("#idActor").val('');	
		$("#htmlMovies").html('');		
		$('#tblMovies').DataTable().clear();
		$('#tblMovies').DataTable().destroy();
		});
	});


