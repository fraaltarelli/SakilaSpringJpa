package it.objectmethod.SakilaSpringJpa.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="category")
public class Categoria {
	
	@GeneratedValue
	@Id
	@Column(name="category_id")
	private Integer id;
	
	
	private String name;
	
	
	@JsonIgnore
	@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE})
	@JoinTable(
	        name = "film_category",
	        joinColumns = @JoinColumn(
	                name = "category_id",
	                referencedColumnName = "category_id"
	        ),
	        inverseJoinColumns = @JoinColumn(
	                name = "film_id",
	                referencedColumnName = "film_id"
	        )
	)
	private List<Film> films;


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public List<Film> getFilms() {
		return films;
	}

	public void setFilms(List<Film> films) {
		this.films = films;
	}

	
}
