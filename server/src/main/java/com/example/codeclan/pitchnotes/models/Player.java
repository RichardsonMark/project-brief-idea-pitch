package com.example.codeclan.pitchnotes.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "leagues_id", nullable = false)
    @JsonIgnoreProperties({"players"})
    private Team team;
    @Column
    private String name;
    @Column
    private String dateOfBirth;
    @Column
    private String nationality;
    @Column
    private String position;
    @Column
    private int numberOfGoals;

    public Player(Team team, String name, String dateOfBirth, String nationality, String position, int numberOfGoals) {
        this.team = team;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.nationality = nationality;
        this.position = position;
        this.numberOfGoals = numberOfGoals;
    }

    public Player() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getNumberOfGoals() {
        return numberOfGoals;
    }

    public void setNumberOfGoals(int numberOfGoals) {
        this.numberOfGoals = numberOfGoals;
    }
}
