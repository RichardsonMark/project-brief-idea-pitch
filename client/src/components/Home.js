import { Container, Grid, Box } from '@material-ui/core';
import ArticlesReadingContainer from "../containers/ArticlesReadingContainer";
import LeagueStandings from "../components/footballData/LeagueStandings";
import FixtureList from "../components/footballData/FixtureList";
import TopScorerList from "../components/footballData/TopScorerList"
import LeagueSelector from './footballData/LeagueSelector';
import LeagueList from './footballData/LeagueList';


const Home = () => (
    <>
        <Box display="flex" flexDirection="row">
            <Container  maxWidth="lg">
                <h4>Pitchnotes News</h4>
                    {/* <h3>New Stories</h3> */}
                    < ArticlesReadingContainer />
                {/* <h3>Top/Most Read Stories</h3>
                    <p>Top/Most Read Stories here...</p> */}
            </Container>
            <Container  maxWidth="md">
                <h4>League Table</h4>
                <LeagueList />
            </Container>
        </Box>
        <Box display="flex" flexDirection="row">
            <Container disableGutters maxWidth="lg">
                <h3>Recent Scores</h3>
                < FixtureList />
            </ Container>
            <Container maxWidth="sm">
                <h3>Top Scorers</h3>
                <Box>
                < TopScorerList /></Box>
            </ Container>
        </Box>
    </>

);

export default Home;