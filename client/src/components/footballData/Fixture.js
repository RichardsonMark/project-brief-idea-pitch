// import {Link} from 'react-router-dom';
import {Container, Paper} from '@material-ui/core';

const Fixture = ({ fixture }) => {

    if (!fixture) {
        return <p>Loading...</p>
    }


    return (
        <Container >
            <Paper elevation={3}>
            <h4>{fixture.league.name}</h4>
            <p> Status: {fixture.status}</p>
            <p>Matchday: {fixture.matchday}</p>
            <p><img src={fixture.homeTeamCrestUrl} width="30" height="30" alt="{teamStanding.team.name} crest" /> {fixture.homeTeam} {fixture.homeTeamScore} - <img src={fixture.awayTeamCrestUrl} width="30" height="30" alt="{teamStanding.team.name} crest" />  {fixture.awayTeam} {fixture.awayTeamScore}</p> 
            </Paper>
        </Container>
    )
}

export default Fixture;