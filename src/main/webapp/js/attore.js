var attori = [];

function findAllActors() {
	$.ajax({
		type: "GET",
		url: "/api/attore/find-all",
		cache: false,
		dataType: "json",
		success: function (allActors) { 
			attori = allActors;
			initializeFormRicerca();
			initializeActorListFormInsertFilm();
		}
	});
}

function initializeFormRicerca() {
	var html= '';
	for (i=0; i< attori.length; i++){
		html+= '<option value='+attori[i].id+'>'+attori[i].firstName+'&nbsp;'+attori[i].lastName+'</option>';
	}
	$("#attoreScelto").html(html);
}

function initializeActorListFormInsertFilm(){
	var html= '';
	for(var i=0; i<attori.length; i++){
		html+='<tr class="attori-form-insert" > <td><input type="checkbox" '
			+'value="'+attori[i].id+'"> <span name="first-name">'+attori[i].firstName+'</span> <span name="last-name"> '
			+attori[i].lastName+' </span> </td></tr>';
	}
	$("#attoriCheckBoxTableBody").html(html);
}


function attoriPerFilm(filmId){
	$.ajax({
		type: "GET",
		url: "/api/attore/find-by-filmId/"+filmId,
		cache: false,
		dataType: "json",
		success: function (attori) { 
			mostraListaAttori(attori);
		}
	});
}

function cercaAttore(){
	var attoreCercato = $("#ricercaAttore").val();
	$.ajax({
		type: "GET",
		url: "/api/attore/find-by-soughtName/"+attoreCercato,
		cache: false,
		dataType: "json",
		success: function (attori) { 
			mostraListaAttori(attori);
		}
	});
}

function mostraListaAttori(attori){
	var html='';
	html+='<table class="table text-center"> <thead> <tr>'
		+'<th scope="col">Attori</th>'
		+'</tr></thead> <tbody>';
	for(var i=0; i<attori.length; i++){
		html+='<tr> <td scope="col"> <button onclick="filmPerAttore('+"'"+attori[i].id+"'"+')">'
		+attori[i].firstName+'&nbsp;'+attori[i].lastName+' </button></td></tr>';
	}
	html+='</tbody></table>';
	$("#listaAttori").html(html);
	$("#listaFilm").hide();
	$("#listaAttori").show();
}