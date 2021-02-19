package com.example.codeclan.pitchnotes.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String headline;
    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    @JsonIgnoreProperties({"articles"})
    private Author author;
    @Column
    private String categoryLeague;
    @Column
    private String lede;
    @Column
    private String mainStory;
    @Column
    private String date;
    @Column
    private int numPageReads;

    public Article(String headline, Author author, String categoryLeague, String lede, String mainStory, String date, int numPageReads) {
        this.headline = headline;
        this.author = author;
        this.categoryLeague = categoryLeague;
        this.lede = lede;
        this.mainStory = mainStory;
        this.date = date;
        this.numPageReads = numPageReads;
    }

    public Article() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public String getCategoryLeague() {
        return categoryLeague;
    }

    public void setCategoryLeague(String categoryLeague) {
        this.categoryLeague = categoryLeague;
    }

    public String getLede() {
        return lede;
    }

    public void setLede(String lede) {
        this.lede = lede;
    }

    public String getMainStory() {
        return mainStory;
    }

    public void setMainStory(String mainStory) {
        this.mainStory = mainStory;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getNumPageReads() {
        return numPageReads;
    }

    public void setNumPageReads(int numPageReads) {
        this.numPageReads = numPageReads;
    }
}
