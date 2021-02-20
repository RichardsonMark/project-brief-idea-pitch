import { React, useState, useEffect } from "react";
// import './components.css';
// import { Image, Segment, Table } from "semantic-ui-react";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import LeagueSelector from "./LeagueSelector"


const LeagueStandings = () => {
  const [standings, setStandings] = useState([]);
  const [league, setLeague] = useState(0);


  const getStandings = () => {
    fetch("http://localhost:8080/api/leagues")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        setStandings(data.[0].teams);
        // console.log(league[0].teams);
    })
};

  useEffect(() => {
    getStandings();
  }, []);
//   console.log(standings);


const getLeagues = () => {
    fetch("http://localhost:8080/api/leagues")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        setLeague(data);
        // console.log(data);
    })
};

  useEffect(() => {
    getLeagues();
  }, []);
//   console.log(league);
console.log(league);

  return (
      <>
          <LeagueSelector
              changeLeague={(league) => setLeague(league)}
              label="Choose league to see info: "
          />

          <TableContainer league={league}  >
              <img src={league.logo} width="90" height="90" alt="league logo" />
              <h1>Serie A league table</h1>
              <Table >
                  <TableHead>
                      <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell>P</TableCell>
                          <TableCell>W</TableCell>
                          <TableCell>D</TableCell>
                          <TableCell>L</TableCell>
                          <TableCell>F</TableCell>
                          <TableCell>A</TableCell>
                          <TableCell>D</TableCell>
                          <TableCell>Pts</TableCell>
                      </TableRow>
                  </TableHead>

                  <TableBody>
                      {standings.map((teamStanding) => {
                          // console.log(teamStanding);

                          return (
                              <TableRow key={teamStanding.id}>
                                  <TableCell>{teamStanding.position}</TableCell>
                                  <TableCell className="clubName">
                                      <img src={teamStanding.crestUrl} width="50" height="50" alt="{teamStanding.team.name} crest" />
                                  </TableCell>
                                  <TableCell>{teamStanding.name}</TableCell>
                                  <TableCell>{teamStanding.playedGames}</TableCell>
                                  <TableCell>{teamStanding.won}</TableCell>
                                  <TableCell>{teamStanding.draw}</TableCell>
                                  <TableCell>{teamStanding.lost}</TableCell>
                                  <TableCell>{teamStanding.goalsFor}</TableCell>
                                  <TableCell>{teamStanding.goalsAgainst}</TableCell>
                                  <TableCell>{teamStanding.goalDifference}</TableCell>
                                  <TableCell>{teamStanding.points}</TableCell>
                              </TableRow>
                          );
                      })}
                  </TableBody>
              </Table>
          </TableContainer>
      </>
  );
};

export default LeagueStandings;