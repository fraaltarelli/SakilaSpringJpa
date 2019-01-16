package it.objectmethod.SakilaSpringJpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import it.objectmethod.SakilaSpringJpa.model.Film;

@Repository
public interface FilmRepository extends JpaRepository<Film, Integer>{
	
//	@Query("select f from Film f where f.title like concat('%',:filmCercato,'%')")
//	public List<Film> findByFilmCercato(@Param("filmCercato") String filmCercato);
	public List<Film> findByTitleContaining(String filmCercato);
	
	@Query("select films from Categoria c where c.id = :categoryId")
	public List<Film> findByCategoryId(@Param("categoryId") Integer categoryId);
	
	@Query("select films from Attore a where a.id = :actorId")
	public List<Film> findByActorId(@Param("actorId") Integer actorId);

}
