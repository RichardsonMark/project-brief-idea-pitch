package com.example.codeclan.pitchnotes.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="fixtures")
public class Fixture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "leagues_id", nullable = false)
    @JsonIgnoreProperties({"teams"})
    private League league;
    @Column
    private String status;
    @Column
    private int matchday;
    @Column
    private int homeTeamScore;
    @Column
    private int awayTeamScore;
    @Column
    private String homeTeam;
    @Column
    private String homeTeamCrestUrl;
    @Column
    private String awayTeam;
    @Column
    private String awayTeamCrestUrl;

    public Fixture(League league, String status, int matchday, int homeTeamScore, int awayTeamScore, String homeTeam, String homeTeamCrestUrl, String awayTeam, String awayTeamCrestUrl) {
        this.league = league;
        this.status = status;
        this.matchday = matchday;
        this.homeTeamScore = homeTeamScore;
        this.awayTeamScore = awayTeamScore;
        this.homeTeam = homeTeam;
        this.homeTeamCrestUrl = homeTeamCrestUrl;
        this.awayTeam = awayTeam;
        this.awayTeamCrestUrl = awayTeamCrestUrl;
    }

    public Fixture() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public League getLeague() {
        return league;
    }

    public void setLeague(League league) {
        this.league = league;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getMatchday() {
        return matchday;
    }

    public void setMatchday(int matchday) {
        this.matchday = matchday;
    }

    public int getHomeTeamScore() {
        return homeTeamScore;
    }

    public void setHomeTeamScore(int homeTeamScore) {
        this.homeTeamScore = homeTeamScore;
    }

    public int getAwayTeamScore() {
        return awayTeamScore;
    }

    public void setAwayTeamScore(int awayTeamScore) {
        this.awayTeamScore = awayTeamScore;
    }

    public String getHomeTeam() {
        return homeTeam;
    }

    public void setHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
    }

    public String getAwayTeam() {
        return awayTeam;
    }

    public void setAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
    }

    public String getHomeTeamCrestUrl() {
        return homeTeamCrestUrl;
    }

    public void setHomeTeamCrestUrl(String homeTeamCrestUrl) {
        this.homeTeamCrestUrl = homeTeamCrestUrl;
    }

    public String getAwayTeamCrestUrl() {
        return awayTeamCrestUrl;
    }

    public void setAwayTeamCrestUrl(String awayTeamCrestUrl) {
        this.awayTeamCrestUrl = awayTeamCrestUrl;
    }
}
