package it.objectmethod.SakilaSpringJpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import it.objectmethod.SakilaSpringJpa.model.Attore;
import it.objectmethod.SakilaSpringJpa.model.Film;
import it.objectmethod.SakilaSpringJpa.repository.AttoreRepository;
import it.objectmethod.SakilaSpringJpa.repository.FilmRepository;


@Controller
public class ActorController {

	@Autowired
	FilmRepository filmRepo;

	@Autowired
	AttoreRepository attoreRepo;

	@GetMapping("attoriPerFilm/{filmId}")
	public String attoriPerFilm(@PathVariable("filmId") Integer filmId, ModelMap model) {
		Film film = filmRepo.findOne(filmId);
		List<Attore> list = film.getAttori();
		model.addAttribute("listaAttori", list);

		return "forward:/stepRiempimentoForm";
	}

	@GetMapping("ricercaAttore")
	public String ricercaAttore(@RequestParam("ricercaAttore") String attoreCercato, ModelMap model) {
		List<Attore> list = attoreRepo.findByAttoreCercato(attoreCercato);
		model.addAttribute("listaAttori", list);

		return "forward:/stepRiempimentoForm";
	}

}
