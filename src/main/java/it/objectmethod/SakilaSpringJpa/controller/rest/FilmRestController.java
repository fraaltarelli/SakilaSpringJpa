package it.objectmethod.SakilaSpringJpa.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.SakilaSpringJpa.model.Film;
import it.objectmethod.SakilaSpringJpa.repository.FilmRepository;

@RestController
@RequestMapping("/api")
public class FilmRestController {
	
	@Autowired
	FilmRepository filmRepo;
	
	@GetMapping("film/findOne")
	Film findOne(@RequestParam("filmId") Integer id) {
		return filmRepo.findOne(id);
	}
	
	@GetMapping("film/find-by-categoryId")
	List<Film> findByCategoryId(@RequestParam("categoryId") Integer categoryId) {
		return filmRepo.findByCategoryId(categoryId);
	}
	
	@GetMapping("film/find-by-soughtTitle")
	List<Film> findBySoughtTitle(@RequestParam("titoloCercato") String titoloCercato){
		return filmRepo.findByTitleContaining(titoloCercato);
	}
	
	@PostMapping("film/insert-update")
	public Film insertUpdate(@RequestBody Film film){
		return filmRepo.save(film);
		
	}

}
