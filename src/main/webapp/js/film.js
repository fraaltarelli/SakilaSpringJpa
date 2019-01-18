function cercaFilmPerCategoria(){
	var idCategoriaScelta = $("#categoriaScelta option:selected").val();
	$.ajax({
		type: "GET",
		url: "/api/film/find-by-categoryId?categoryId="+idCategoriaScelta,
		cache: false,
		dataType: "json",
		success: function (films) { 
			mostraListaFilm(films);
		}

	});
}

function cercaFilmPerAttoreDaSelect(){
	var idAttoreScelto = $("#attoreScelto option:selected").val();
	filmPerAttore(idAttoreScelto);
}

function mostraListaFilm(films){

	var html='';

	html+='<table class="table text-center"> <thead> <tr>'
		+'<th scope="col-6">Titolo</th>'
		+'<th scope="col-2">Costo</th>'
		+'<th scope="col-2">Durata</th>'
		+'<th scope="col-2">Anno</th>'
		+'</tr></thead> <tbody>';
	for(var i=0; i<films.length; i++){
		html+='<tr> <td scope="col-6"> <button onclick="attoriPerFilm('+"'"+films[i].id+"'"+')">'
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
	var attoriDaInserireList = [];
	$(".attori-form-insert input[type=checkbox]:checked").each(function(){
		var tmp = {};
		tmp.id = parseInt($(this).val(), 10);
		parseInt($('#myInput').val(), 10);
		var innerSpan = $(this).closest("tr").find("span:first");
		tmp.firstName = innerSpan.html();
		innerSpan = $(this).closest("tr").find("span:last");
		tmp.lastName = innerSpan.html();
		$("#p1").text(tmp.firstName+" "+tmp.lastName);
		attoriDaInserireList.push(tmp);
	});
	
//	attoriDaInserireList.push(attori[1]);
//	attoriDaInserireList.push(attori[2]);
    
	for(var i=0; i<attori.length; i++)
		if(i==(attori.length-1)){
	filmDaInserireJson.attori = attoriDaInserireList;
    var jsonString = JSON.stringify(filmDaInserireJson);
	$.ajax({
		type: "POST",
		url: "/api/film/insert-update",
		contentType: "application/json",
		data: jsonString,
		dataType: "json",
		success: function (result) { 

			$("#p1").text(jsonString);
		}

	});
		}
}
