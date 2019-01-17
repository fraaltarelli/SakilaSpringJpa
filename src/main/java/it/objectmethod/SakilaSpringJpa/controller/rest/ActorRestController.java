package it.objectmethod.SakilaSpringJpa.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.SakilaSpringJpa.model.Attore;
import it.objectmethod.SakilaSpringJpa.repository.AttoreRepository;

@RestController
@RequestMapping("/api")
public class ActorRestController {

	@Autowired
	AttoreRepository attoreRepo;

	@GetMapping("attore/find-by-soughtName/{nomeCercato}")
	List<Attore> findByAttoreCercato(@PathVariable("nomeCercato") String nomeCercato){
		return attoreRepo.findByAttoreCercato(nomeCercato);
	}

	@GetMapping("attore/find-all")
	List<Attore> findAll(){
		return attoreRepo.findAll();
	}
	
	@GetMapping("attore/findOne/{id}")
	Attore findOne(@PathVariable("id") Integer id){
		return attoreRepo.findOne(id);
	}
	
	@GetMapping("attore/find-by-filmId/{filmId}")
	List<Attore> findByFilmId(@PathVariable("filmId") Integer filmId){
		return attoreRepo.findByFilmId(filmId);
	}


}
