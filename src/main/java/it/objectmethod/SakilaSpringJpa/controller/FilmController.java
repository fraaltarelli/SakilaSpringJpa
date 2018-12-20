package it.objectmethod.SakilaSpringJpa.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import it.objectmethod.SakilaSpringJpa.model.Attore;
import it.objectmethod.SakilaSpringJpa.model.Categoria;
import it.objectmethod.SakilaSpringJpa.model.Film;
import it.objectmethod.SakilaSpringJpa.repository.AttoreRepository;
import it.objectmethod.SakilaSpringJpa.repository.CategoriaRepository;
import it.objectmethod.SakilaSpringJpa.repository.FilmRepository;



@Controller
public class FilmController {

	@Autowired
	FilmRepository filmRepo;

	@Autowired
	CategoriaRepository categoriaRepo;

	@Autowired
	AttoreRepository attoreRepo;

	@GetMapping("ricercaFilmPerCategoria")
	public String filmPerCategoria (@RequestParam("categoriaFilm") Integer categoryId, ModelMap model) {
		Categoria categoria = categoriaRepo.findOne(categoryId);
		List<Film> list = categoria.getFilms(); 
		model.addAttribute("listaFilm", list);

		return "forward:/stepRiempimentoForm";
	}

	@GetMapping("ricercaFilmPerAttore")
	public String filmPerAttore (@RequestParam("attoreId") Integer actorId, ModelMap model) {
		Attore attore = attoreRepo.findOne(actorId);
		List<Film> list = attore.getFilms();
		model.addAttribute("listaFilm", list);
		return "forward:/stepRiempimentoForm";
	}

	@GetMapping("filmPerAttore/{attoreId}")
	public String filmPerAttorePathVariable (@PathVariable("attoreId") Integer actorId, ModelMap model) {
		Attore attore = attoreRepo.findOne(actorId);
		List<Film> list = attore.getFilms();
		model.addAttribute("listaFilm", list);
		return "forward:/stepRiempimentoForm";
	}

	@GetMapping("ricercaFilm")
	public String ricercaFilm(@RequestParam("ricercaFilm") String filmCercato, ModelMap model) {
		List<Film> listaFilm = filmRepo.findByTitleContaining(filmCercato);
		model.addAttribute("listaFilm", listaFilm);
		return "forward:/stepRiempimentoForm";
	}

	@GetMapping("inserimentoFilm")
	String inserimentoFilmForm(ModelMap model) {
		List<Categoria> allCategories = categoriaRepo.findAll();
		model.addAttribute("allCategories", allCategories);

		List<Attore> allActors = attoreRepo.findAll();
		model.addAttribute("allActors", allActors);
		return "inserimentoFilm";
	}

	@PostMapping("inserisciFilm")
	public String inserimentoFilm (@RequestParam("titolo") String titolo,
			@RequestParam("prezzo") String prezzo, @RequestParam(value="durata", required=false) Integer durata, 
			@RequestParam(value="anno", required=false) Integer anno, @RequestParam(value="idAttoriDaInserire", required=false) Integer[] attori,
			@RequestParam("categoria") Integer categoriaId, ModelMap model) {
		boolean errors=false;
		double prezzoInDouble=0;
		String messaggio="inserimento andato a buon fine";

		if(attori==null) {
			errors = true;
			messaggio="scegliere almeno un attore";
		}

		if(titolo.equals("")) {
			errors = true;
			messaggio="inserisci il titolo";
		}

		try{
			prezzoInDouble= Double.parseDouble(prezzo);
			if(prezzoInDouble>99.99) {
				errors = true;
				messaggio="il prezzo non deve superare 99.99 $";
			}
			if(prezzoInDouble<0) {
				errors = true;
				messaggio="il prezzo deve essere maggiore o uguale di 0 $";
			}
		} catch (Exception e) {
			errors = true;
			messaggio="il prezzo non è stato inserito correttamente";
		}

		if(durata==null) {
			errors = true;
			messaggio="inserisci la durata";
		}
		else {
			if(durata>65535) {
				errors = true;
				messaggio="durata massima: 65535 min";
			}
			if(durata<=0) {
				errors = true;
				messaggio="la durata deve essere un numero positivo";
			}
		}
		if(anno==null) {
			errors = true;
			messaggio="inserisci l'anno";
		}
		else {
			if(anno>2100) {
				errors = true;
				messaggio="l'anno deve essere minore del 2100";
			}
			if(anno<1930) {
				errors = true;
				messaggio="l'anno deve essere maggiore del 1930";
			}
		}
		if(!errors) {
			try {
				Film filmDaInserire = new Film();
				filmDaInserire.setTitle(titolo);
				filmDaInserire.setLength(durata);
				filmDaInserire.setReleaseYear(anno);
				filmDaInserire.setRentalRate(prezzoInDouble);
				filmDaInserire.setLanguageId(1);
				List<Attore> listaAttori = new ArrayList<Attore>();
				for(Integer id: attori) {
					Attore attoreById= attoreRepo.findOne(id);
					listaAttori.add(attoreById);
				}
				Categoria categoriaById = categoriaRepo.findOne(categoriaId);
				filmDaInserire.setAttori(listaAttori);
				List<Categoria> listaCategoria= new ArrayList<Categoria>();
				listaCategoria.add(categoriaById);
				filmDaInserire.setCategorie(listaCategoria);
				filmRepo.save(filmDaInserire);	
			}  catch(Exception e) {
				e.printStackTrace();
				errors = true;
				messaggio="inserimento film non riuscito";
			}
		}

		List<Categoria> allCategories = categoriaRepo.findAll();
		model.addAttribute("allCategories", allCategories);

		List<Attore> allActors = attoreRepo.findAll();
		model.addAttribute("allActors", allActors);
		model.addAttribute("messaggio", messaggio);
		return "inserimentoFilm";

	}

}
