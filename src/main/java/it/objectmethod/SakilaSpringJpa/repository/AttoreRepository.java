package it.objectmethod.SakilaSpringJpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import it.objectmethod.SakilaSpringJpa.model.Attore;

@Repository
public interface AttoreRepository extends JpaRepository<Attore, Integer>{
	
	@Query("select a from Attore a where a.firstName like concat('%',:attoreCercato,'%') or a.lastName like concat('%',:attoreCercato,'%')")
	public List<Attore> findByAttoreCercato(@Param("attoreCercato") String attoreCercato);

}
