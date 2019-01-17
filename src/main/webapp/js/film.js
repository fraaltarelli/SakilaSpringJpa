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


function inserisciFilm(){
	
	var filmDaInserireJson = {};
	
	filmDaInserireJson.id = 0;
	var titoloInserito = $("#titoloInserito").val();
	filmDaInserireJson.title = titoloInserito;
	var prezzoInserito = $("#prezzoInserito").val();
	filmDaInserireJson.rentalRate = prezzoInserito;
	filmDaInserireJson.languageId = 1;
	var durataInserita = $("#durataInserita").val();
	filmDaInserireJson.length = durataInserita;
	var categoriaScelta = $("#categoriaSceltaInserimentoFilm").val();
	var annoInserito = $("#annoInserito").val();
	filmDaInserireJson.releaseYear = annoInserito;
	var idAttoriDaInserire = document.getElementsByName("idAttoriDaInserire");
	var attoriArray = [];
	
//	var attoreJson ={};
//	var text = "";
	
	for(var i=0; i< idAttoriDaInserire.length; i++){
		
		
		
		if(idAttoriDaInserire[i].checked==true){
			var id = idAttoriDaInserire[i].value;
//		text+= idAttoriDaInserire[i].value;
//			$.ajax({
//				type: "GET",
//				url: "api/attore/findOne/"+id,
//				cache: false,
//				dataType: "json",
//				success: function (attore) { 
//					attoriArray.push(attore);
////					filmDaInserireJson.attori = attore;
//				}
//			});
		}
//		text = JSON.stringify(attoreJson);
	}
	
	filmDaInserireJson.attori = attoriArray;
	
//	var obj = JSON.parse(filmDaInserireJson);
//	continua(filmDaInserireJson);
	
	$.ajax({
		type: "POST",
		url: "/api/film/insert-update",
		cache: false,
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(filmDaInserireJson),
		dataType: "json",
		success: function (result) { 
			
			$("#p1").text("salvataggio del film riuscito");
		}

	});
	
//	$("#p1").text(text);
	
}

//function continua(filmDaInserireJson){
//	$.ajax({
//		type: "POST",
//		url: "/api/film/insert-update",
//		cache: false,
//		contentType: "application/json; charset=utf-8",
//		data: filmDaInserireJson,
//		dataType: "json",
//		success: function (result) { 
////			citiesByCountryCode(countryCode);
////			$("#messaggioForm").text("Salvataggio riuscito della citta "+name);
//			$("#p1").text("salvataggio del film riuscito");
//		}
//
//	});
//}
