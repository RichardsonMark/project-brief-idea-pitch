import { Container, Grid, Box } from '@material-ui/core';
import ArticlesReadingContainer from "../containers/ArticlesReadingContainer";
import LeagueStandings from "../components/footballData/LeagueStandings";


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
                <p>Results here...</p>
                <h3>Top Scorers</h3>
                <p>Top Scorers here...</p>
            </Container>
        </Box>
    </>

);

export default Home;