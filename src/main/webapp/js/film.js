function cercaFilmPerCategoria(){
	var idCategoriaScelta = $("#categoriaScelta option:selected").val();
	$.ajax({
		type: "GET",
		url: "/api/film/find-by-categoryId?categoryId="+idCategoriaScelta,
		cache: false,
		dataType: "json",
		success: function (films) { 
//			filmsJson = categoria.films;
//			var titolo1= filmsJson[1].title;
			
//			var testo = films[1].title;
//			$("#p1").text(testo);
			mostraListaFilm(films);
		}

	});
}

function cercaFilmPerAttoreDaSelect(){
	var idAttoreScelto = $("#attoreScelto option:selected").val();
	filmPerAttore(idAttoreScelto);
}

function mostraListaFilm(films){
	
//	var testo = films[1].title;
//	$("#p1").text(testo);
	var html='';
//	<c:if test="${listaFilm != null }">
	html+='<table class="table text-center"> <thead> <tr>'
		    +'<th scope="col-6">Titolo</th>'
			+'<th scope="col-2">Costo</th>'
			+'<th scope="col-2">Durata</th>'
			+'<th scope="col-2">Anno</th>'
			+'</tr></thead> <tbody>';
	   for(var i=0; i<films.length; i++){
		   html+='<tr> <td scope="col-6"> <button onclick="attoriPerFilm('+"'"+films[i].id+"'"+')">'
//	            <a href="/attoriPerFilm/${film.id}">
					+films[i].title+' </button></td>'
				+'<td scope="col-2">'+films[i].rentalRate+'&nbsp;$</td>'
				+'<td scope="col-2">'+films[i].length+'&nbsp;min</td>'
				+'<td scope="col-2">'+films[i].releaseYear+'</td></tr>';
	   }
      html+='</tbody></table>';
      $("#listaFilm").html(html);
      $("#listaAttori").hide();
      $("#listaFilm").show();
}


function filmPerAttore(attoreId){
	$.ajax({
		type: "GET",
		url: "api/film/findByActorId?actorId="+attoreId,
		cache: false,
		dataType: "json",
		success: function (films) { 
			mostraListaFilm(films);
		}
	});
}


function cercaFilm(){
	var titoloCercato = $("#ricercaFilm").val();
	$.ajax({
		type: "GET",
		url: "/api/film/find-by-soughtTitle?titoloCercato="+titoloCercato,
		cache: false,
		dataType: "json",
		success: function (films) { 
			mostraListaFilm(films);
		}
	});
}

