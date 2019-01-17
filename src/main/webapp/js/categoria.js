function inizioFormRicercaFilmPerCategoria() {
	$.ajax({
		type: "GET",
		url: "/api/categoria/find-all",
		cache: false,
		dataType: "json",
		success: function (allCategories) { 
			var html= '';
			for (i=0; i< allCategories.length; i++){
				html+= '<option value='+allCategories[i].id+'>'+allCategories[i].name+'</option>';
			}
			$("#categoriaScelta").html(html);
			$("#categoriaSceltaInserimentoFilm").html(html);
		}

	});
}