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
<!-- Import dei CSS -->
<script type="text/javascript" src="/js/film.js"></script>
<!-- Import Javascript -->
<script type="text/javascript" src="/js/categoria.js"></script>

</head>
<body>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col" id="formRicercaFilmPerCategoria">
				<strong>Ricerca film per categoria</strong> <br> <select id="categoriaScelta">
				</select>
				<button onclick="cercaFilmPerCategoria()">Cerca</button>

			</div>
		</div>
		<br>

		<c:if test="${allActors != null}">
			<form action="/ricercaFilmPerAttore">
				<strong>Ricerca film per attore</strong> <br> <select
					name="attoreId">
					<c:forEach items="${allActors}" var="attore">
						<option value="${attore.id}">${attore.firstName}&nbsp
							${attore.lastName}</option>
					</c:forEach>
				</select> <input type="submit" name="cercaFilmPerAttore" value="Cerca">
			</form>
		</c:if>

		<br>
		<form action="/ricercaAttore">
			<input type="text" name="ricercaAttore"> <input type="submit"
				name="cercaAttore" value="Cerca Attore">
		</form>
		<br>

		<form action="/ricercaFilm">
			<input type="text" name="ricercaFilm"> <input type="submit"
				name="cercaFilm" value="Cerca Film">
		</form>
		<br>

		<form action="/inserimentoFilm">
			<input type="submit" name="inserimentoFilm"
				value="Inserisci un nuovo film">
		</form>
		<br>



		<c:if test="${listaFilm != null }">

			<table width="75%" border="1" align="center">
				<tr>
					<th width="40%">Titolo</th>
					<th width="24%">Costo</th>
					<th width="24%">Durata</th>
					<th width="12%">Anno</th>
				</tr>
				<c:forEach items="${listaFilm}" var="film">
					<tr>
						<td width="40%"><a href="/attoriPerFilm/${film.id}">
								${film.title} </a></td>
						<td width="24%">${film.rentalRate}&nbsp;$</td>
						<td width="24%">${film.length}&nbsp;min</td>
						<td width="12%">${film.releaseYear}</td>
					</tr>
				</c:forEach>
			</table>
		</c:if>

		<c:if test="${listaAttori != null }">
			<table width="50%" border="1" align="center">
				<tr>
					<th width="50%">Attori</th>
				</tr>
				<c:forEach items="${listaAttori}" var="attore">
					<tr>

						<td width="50%"><a href="/filmPerAttore/${attore.id}">
								${attore.firstName} &nbsp; ${attore.lastName} </a></td>
					</tr>
				</c:forEach>
			</table>
		</c:if>
	</div>
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