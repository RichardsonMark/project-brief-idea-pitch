import { Container, Grid, Box } from '@material-ui/core';
import ArticlesReadingContainer from "../containers/ArticlesReadingContainer";
import LeagueStandings from "../components/footballData/LeagueStandings";
import FixtureList from "../components/footballData/FixtureList";
import TopScorerList from "../components/footballData/TopScorerList"

const Home = () => (
    <>
        <Box display="flex" flexDirection="row">
            <Container>
                <h4>Pitchnotes</h4>
                <Container>
                    <h3>New Stories</h3>
                    < ArticlesReadingContainer />

                </Container>
                {/* <Container>
                    <h3>Top/Most Read Stories</h3>
                    <p>Top/Most Read Stories here...</p>
                </Container> */}
            </Container>
            <Container>
                <h4>League Table</h4>
                <h3>Table</h3>
                <LeagueStandings />
                <h3>Recent Scores</h3>
                < FixtureList />
                <h3>Top Scorers</h3>
                < TopScorerList />
            </Container>
        </Box>
    </>

);

export default Home;