import { Container, Grid, Box, Paper, Typography } from '@material-ui/core';
import ArticlesReadingContainer from "../containers/ArticlesReadingContainer";
import LeagueStandings from "../components/footballData/LeagueStandings";
import FixtureList from "../components/footballData/FixtureList";
import TopScorerList from "../components/footballData/TopScorerList"
import LeagueSelector from './footballData/LeagueSelector';
import LeagueList from './footballData/LeagueList';


const Home = () => (
    <>
        <Box display="flex" flexDirection="row">
            <Container maxWidth="lg">
                <Paper elevation={3}>
                    <h4>Pitchnotes News</h4>
                </Paper>
                <Paper elevation={3}>
                    {/* <h3>New Stories</h3> */}
                    < ArticlesReadingContainer />
                    {/* <h3>Top/Most Read Stories</h3>
                    <p>Top/Most Read Stories here...</p> */}
                </Paper>
            </Container>
            <Container maxWidth="md">
                <Paper elevation={3}>
                    <h4>League Table</h4>
                </Paper>
                <Paper elevation={3}>
                    <LeagueList />
                </Paper>
            </Container>
        </Box>
        <Box display="flex" flexDirection="row">
            <Container disableGutters maxWidth="md">
                <Paper elevation={3}>
                    <h3>Recent Scores</h3>
                </Paper>
                <Paper elevation={3}>
                    < FixtureList />
                </Paper>
            </ Container>
            <Container maxWidth="sm">
                <Paper elevation={3}>
                    <h3>Top Scorers</h3>
                </Paper>
                <Paper elevation={3}>
                    <Box>
                        < TopScorerList />
                    </Box>
                </Paper>
            </ Container>
        </Box>
    </>

);

export default Home;