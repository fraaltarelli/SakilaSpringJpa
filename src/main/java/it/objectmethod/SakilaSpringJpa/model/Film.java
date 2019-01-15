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

@Entity
@Table(name="film")
public class Film {
	
	@GeneratedValue
	@Id
	@Column(name="film_id")
	private Integer id;
	
	private String title;
	
	@Column(name="release_year")
	private Integer releaseYear;
	
	@Column(name="rental_rate")
	private Double rentalRate;
	
	@Column(name="language_id")
	private Integer languageId;
	
	public Integer getLanguageId() {
		return languageId;
	}

	public void setLanguageId(Integer languageId) {
		this.languageId = languageId;
	}

	@Column(name="length")
	private Integer length;
	
	@JsonIgnore
	@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE})
	@JoinTable(
	        name = "film_actor",
	        joinColumns = @JoinColumn(
	                name = "film_id",
	                referencedColumnName = "film_id"
	        ),
	        inverseJoinColumns = @JoinColumn(
	                name = "actor_id",
	                referencedColumnName = "actor_id"
	        )
	)
	private List<Attore> attori;
	
	@JsonIgnore
	@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE})
	@JoinTable(
	        name = "film_category",
	        joinColumns = @JoinColumn(
	                name = "film_id",
	                referencedColumnName = "film_id"
	        ),
	        inverseJoinColumns = @JoinColumn(
	                name = "category_id",
	                referencedColumnName = "category_id"
	        )
	)
	private List<Categoria> categorie;


	public List<Categoria> getCategorie() {
		return categorie;
	}

	public void setCategorie(List<Categoria> categorie) {
		this.categorie = categorie;
	}

	public List<Attore> getAttori() {
		return attori;
	}

	public void setAttori(List<Attore> attori) {
		this.attori = attori;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getReleaseYear() {
		return releaseYear;
	}

	public void setReleaseYear(Integer releaseYear) {
		this.releaseYear = releaseYear;
	}

	public Double getRentalRate() {
		return rentalRate;
	}

	public void setRentalRate(Double rentalRate) {
		this.rentalRate = rentalRate;
	}

	public Integer getLength() {
		return length;
	}

	public void setLength(Integer length) {
		this.length = length;
	}
	

}
