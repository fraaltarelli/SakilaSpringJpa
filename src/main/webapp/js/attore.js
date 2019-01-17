var attoriGlobal;


function inizioAllActorsFormInserimentoFilm(){
	var html='';
	$.ajax({
		type: "GET",
		url: "/api/attore/find-all",
		cache: false,
		dataType: "json",
		success: function (attori) { 
			attoriGlobal=attori;
			for(var i=0; i<attori.length; i++){
			html+='<tr> <td><input type="checkbox" name="idAttoriDaInserire"'
				+'value="'+attori[i].id+'"> '+attori[i].firstName+' &nbsp; '
				+attori[i].lastName+' </td> </tr>';
			}
			$("#attoriCheckBoxTableBody").html(html);
		}
	});
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

function inizioFormRicercaFilmPerAttore() {
	$.ajax({
		type: "GET",
		url: "/api/attore/find-all",
		cache: false,
		dataType: "json",
		success: function (allActors) { 
			var html= '';
			for (i=0; i< allActors.length; i++){
			html+= '<option value='+allActors[i].id+'>'+allActors[i].firstName+'&nbsp;'+allActors[i].lastName+'</option>';
			}
			$("#attoreScelto").html(html);
		}

	});
}

function mostraListaAttori(attori){
	var html='';
	html+='<table class="table text-center"> <thead> <tr>'
		    +'<th scope="col">Attori</th>'
			+'</tr></thead> <tbody>';
//
//		<c:forEach items="${listaAttori}" var="attore">
//			<tr>
//
//				<td width="50%"><a href="/filmPerAttore/${attore.id}">
//						${attore.firstName} &nbsp; ${attore.lastName} </a></td>
//			</tr>
//		</c:forEach>
//	</table>
for(var i=0; i<attori.length; i++){
	   html+='<tr> <td scope="col"> <button onclick="filmPerAttore('+"'"+attori[i].id+"'"+')">'
//         <a href="/attoriPerFilm/${film.id}">
				+attori[i].firstName+'&nbsp;'+attori[i].lastName+' </button></td></tr>';
}
html+='</tbody></table>';
$("#listaAttori").html(html);
$("#listaFilm").hide();
$("#listaAttori").show();
}