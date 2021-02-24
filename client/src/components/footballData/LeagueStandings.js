import { React, useState, useEffect } from "react";
// import './components.css';
// import { Image, Segment, Table } from "semantic-ui-react";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import LeagueSelector from "./LeagueSelector"


const LeagueStandings = ({ leaguelist, onLeagueSelected }) => {
    const [standings, setStandings] = useState([]);
    // const [leagues, setLeagues] = useState([]);
    const [league, setLeague] = useState([]);



    const getStandings = () => {
        fetch(`http://localhost:8080/api/teams/${league}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setStandings(data);    
                // console.log(data);            
                // setStandings(league.[0].teams);
                // console.log(league[0].teams);
            })
    };

    useEffect(() => {
        getStandings();
    }, [league]);
      console.log(standings);

      console.log(league);


      const handleChange = event => {const { value } = event.target; setLeague(value) }
    



    if (!league) {
        return null
    }
    return (
        <>
            {/* <LeagueSelector league={league} 
                            onChange={event => {const { value } = event.target; setLeague(value) }} 
                            label="Choose league to see info: " /> */}
                    <select 
         defaultValue="" onChange={handleChange}>
          <option value="" disabled>Choose a league</option>
          {leaguelist.map(league => {
            return (
              <option key={league.id} value={league.id}>{league.name}</option>
            )
          })}
        </select>
            <Paper elevation={3}>
                <TableContainer league={league}  >

                    <h1><img src={league.logo} width="60" height="60" alt="league logo" /> {league.name} league table</h1>
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
                                            <img src={teamStanding.crestUrl} width="20" height="20" alt="{teamStanding.team.name} crest" />
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
            </Paper>
        </>
    );
};

export default LeagueStandings;