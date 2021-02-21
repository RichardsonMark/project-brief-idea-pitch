import {Container, Paper} from '@material-ui/core';

const TopScorer = ({ scorer }) => {

    if (!scorer) {
        return <p>Loading...</p>
    }


    return (
        <Container >
            <Paper elevation={3}>
            <h4><img src={scorer.team.crestUrl} width="25" height="25" alt="{scorer.team.name} crest" /> {scorer.name} </h4>
            <p> Goals: {scorer.numberOfGoals}</p>
            </Paper>
        </Container>
    )
}

export default TopScorer;