package com.example.codeclan.pitchnotes.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String name;
    @Column
    private String crestUrl;
    @ManyToOne
    @JoinColumn(name = "leagues_id", nullable = false)
    @JsonIgnoreProperties({"teams"})
    private League league;
    @Column(name = "playedGames")
    private int playedGames;
    @Column(name = "form")
    private String form;
    @Column(name = "won")
    private int won;
    @Column(name = "draw")
    private int draw;
    @Column(name = "lost")
    private int lost;
    @Column(name = "points")
    private int points;
    @Column(name = "goalsFor")
    private int goalsFor;
    @Column(name = "goalsAgainst")
    private int goalsAgainst;
    @Column(name = "goalDifference")
    private int goalDifference;
    @Column(name = "position")
    private int position;

    public Team(String name, String crestUrl, League league, int playedGames, String form, int won, int draw, int lost, int points, int goalsFor, int goalsAgainst, int goalDifference, int position) {
        this.name = name;
        this.crestUrl = crestUrl;
        this.league = league;
        this.playedGames = playedGames;
        this.form = form;
        this.won = won;
        this.draw = draw;
        this.lost = lost;
        this.points = points;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
        this.goalDifference = goalDifference;
        this.position = position;
    }

    public Team() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCrestUrl() {
        return crestUrl;
    }

    public void setCrestUrl(String crestUrl) {
        this.crestUrl = crestUrl;
    }

    public League getLeague() {
        return league;
    }

    public void setLeague(League league) {
        this.league = league;
    }

    public int getPlayedGames() {
        return playedGames;
    }

    public void setPlayedGames(int playedGames) {
        this.playedGames = playedGames;
    }

    public String getForm() {
        return form;
    }

    public void setForm(String form) {
        this.form = form;
    }

    public int getWon() {
        return won;
    }

    public void setWon(int won) {
        this.won = won;
    }

    public int getDraw() {
        return draw;
    }

    public void setDraw(int draw) {
        this.draw = draw;
    }

    public int getLost() {
        return lost;
    }

    public void setLost(int lost) {
        this.lost = lost;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getGoalsFor() {
        return goalsFor;
    }

    public void setGoalsFor(int goalsFor) {
        this.goalsFor = goalsFor;
    }

    public int getGoalsAgainst() {
        return goalsAgainst;
    }

    public void setGoalsAgainst(int goalsAgainst) {
        this.goalsAgainst = goalsAgainst;
    }

    public int getGoalDifference() {
        return goalDifference;
    }

    public void setGoalDifference(int goalDifference) {
        this.goalDifference = goalDifference;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}
