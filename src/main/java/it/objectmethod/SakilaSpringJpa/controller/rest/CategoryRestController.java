package it.objectmethod.SakilaSpringJpa.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.SakilaSpringJpa.model.Categoria;
import it.objectmethod.SakilaSpringJpa.repository.CategoriaRepository;

@RestController
@RequestMapping("/api")
public class CategoryRestController {
	
	@Autowired
	CategoriaRepository categoriaRepo;
	
	@GetMapping("categoria/find-all")
	List<Categoria> findAll(){
		return categoriaRepo.findAll();
	}
	
	@GetMapping("categoria/findOne")
	Categoria findOne(@RequestParam("categoryId") Integer id) {
		return categoriaRepo.findOne(id);
	}

}
