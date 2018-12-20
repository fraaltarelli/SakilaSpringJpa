package it.objectmethod.SakilaSpringJpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import it.objectmethod.SakilaSpringJpa.model.Attore;
import it.objectmethod.SakilaSpringJpa.model.Categoria;
import it.objectmethod.SakilaSpringJpa.repository.AttoreRepository;
import it.objectmethod.SakilaSpringJpa.repository.CategoriaRepository;

@Controller
public class HomeController {
	
	@Autowired
	CategoriaRepository categoriaRepo;
	
	@Autowired
	AttoreRepository attoreRepo;

	@GetMapping("inizio")
	public String inizio() {
		return "forward:/stepRiempimentoForm";
	}

	@GetMapping("stepRiempimentoForm")
	public String riempimentoForm (ModelMap model) {
		List<Categoria> allCategories = categoriaRepo.findAll();
		model.addAttribute("allCategories", allCategories);

		List<Attore> allActors = attoreRepo.findAll();
		model.addAttribute("allActors", allActors);
		return "main";
	}

}
