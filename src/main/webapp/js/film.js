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

function mostraListaFilm(films){
	
//	var testo = films[1].title;
//	$("#p1").text(testo);
	
	
	
//	<c:if test="${listaFilm != null }">
//
//	<table width="75%" border="1" align="center">
//		<tr>
//			<th width="40%">Titolo</th>
//			<th width="24%">Costo</th>
//			<th width="24%">Durata</th>
//			<th width="12%">Anno</th>
//		</tr>
//		<c:forEach items="${listaFilm}" var="film">
//			<tr>
//				<td width="40%"><a href="/attoriPerFilm/${film.id}">
//						${film.title} </a></td>
//				<td width="24%">${film.rentalRate}&nbsp;$</td>
//				<td width="24%">${film.length}&nbsp;min</td>
//				<td width="12%">${film.releaseYear}</td>
//			</tr>
//		</c:forEach>
//	</table>
//</c:if>
}