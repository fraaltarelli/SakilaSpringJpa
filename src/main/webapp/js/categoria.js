$(document).ready(function(){
	inizioFormRicercaFilmPerCategoria();
});

function inizioFormRicercaFilmPerCategoria() {
	$.ajax({
		type: "GET",
		url: "/api/categoria/find-all",
		cache: false,
		dataType: "json",
		success: function (result) { 
			var allCategories = result;
			var html= '';
			for (i=0; i< allCategories.length; i++){
			html+= '<option value='+allCategories[i].id+'>'+allCategories[i].name+'</option>';
			}
			$("#categoriaScelta").html(html);
		}

	});
}

//function inizioFormRicercaFilmPerCategoria() {
//	
//	var xmlhttp = new XMLHttpRequest();
//	var url= '/api/categoria/find-all';
//	xmlhttp.onreadystatechange = function() {
//		if (this.readyState == 4 && this.status == 200) {
//			console.log("ARRIVATA RISPOSTA!");
//			var allCategories = JSON.parse(this.responseText);
//			var html= '';
//			for (i=0; i< allCategories.length; i++){
//			html+= '<option value='+allCategories[i].id+'>'+allCategories[i].name+'</option>';
//			}
//			document.getElementById("categoriaScelta").innerHTML= html;
//		}
//	}
//	xmlhttp.open("GET", url, true);
//	xmlhttp.send();
//	console.log("CHIAMATA INVIATA");
//	
//	
//}