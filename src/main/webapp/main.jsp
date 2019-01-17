<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Home Page</title>

<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
	integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
	crossorigin="anonymous">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
	
</script>

<link rel="stylesheet" type="text/css" href="/css/style.css">

<script type="text/javascript" src="/js/main.js"></script>
<script type="text/javascript" src="/js/film.js"></script>
<script type="text/javascript" src="/js/categoria.js"></script>
<script type="text/javascript" src="/js/attore.js"></script>

</head>
<body>
	<div class="container">
		<div class="row justify-content-center">
			<strong>Ricerca film per categoria</strong> &nbsp; <select
				id="categoriaScelta">
			</select>
			<button onclick="cercaFilmPerCategoria()">Cerca</button>
			&nbsp;&nbsp;&nbsp; <strong>Ricerca film per attore</strong> &nbsp; <select
				id="attoreScelto">
			</select>
			<button onclick="cercaFilmPerAttoreDaSelect()">Cerca</button>
		</div>
		<div class="row justify-content-center marginTopRow">
			<input type="text" id="ricercaAttore">
			<button onclick="cercaAttore()">Cerca Attore</button>
			&nbsp; <input type="text" id="ricercaFilm">
			<button onclick="cercaFilm()">Cerca Film</button>
			&nbsp; &nbsp; &nbsp;

			<form action="/inserimentoFilm">
				<input type="submit" name="inserimentoFilm"
					value="Inserisci un nuovo film">
			</form>
			&nbsp;
		</div>
		<div class="row justify-content-center marginTopRowLarge">

			<div id="listaFilm"></div>

			<div id="listaAttori"></div>




			<div id="divInserimentoFilm">

				<div class="row justify-content-center">
					<p id="messaggioDivInserimentoFilm">${messaggio}</p>
				</div>
				
				
					<table class="table text-center">
						<thead>
							<tr>
								<th scope="col-4">Titolo</th>
								<th scope="col-2">Prezzo (numero decimale, formato: 12.89)</th>
								<th scope="col-2">Durata in minuti</th>
								<th scope="col-2">Categoria</th>
								<th scope="col-2">Anno</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td scope="col-4"><input type="text" size="35" id="titoloInserito"
									maxlength="30" required></td>
								<td scope="col-2"><input type="text" id="prezzoInserito" required>
									&nbsp; $</td>
								<td scope="col-2"><input type="number" id="durataInserita" min="1"
									max="65535" required> min </td>
								<td scope="col-2"><select id="categoriaSceltaInserimentoFilm"></select>
								        <%-- name="categoria">
										<c:forEach items="${allCategories}" var="categoria">
											<option value="${categoria.id}">${categoria.name}</option>
										</c:forEach> --%>
										
										</td>

								<td scope="col-2"><input type="number" id="annoInserito" min="1930"
									max="2100" value="2000" required></td>
							</tr>
						</tbody>
					</table>
					<div class="row justify-content-center">
						<button onclick="inserisciFilm()">Inserisci Film</button>
					</div>
					<br>
					<br>
					
					<table class="table table-sm text-center">
					<thead>
						<tr>
							<th>Seleziona gli attori del film:</th>
						</tr>
						</thead>
						<tbody id="attoriCheckBoxTableBody"></tbody>
						
						
						<%-- <c:forEach items="${allActors}" var="attore">
							<tr>

								<td><input type="checkbox" name="idAttoriDaInserire"
									value="${attore.id}"> ${attore.firstName} &nbsp;
									${attore.lastName} <br></td>
							</tr>
						</c:forEach> --%>
						
						
					</table>

			</div>





		</div>
		<p id="p1"></p>
	</div>

	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
		integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
		crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
		integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
		crossorigin="anonymous"></script>
</body>
</html>