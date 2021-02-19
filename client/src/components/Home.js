import { Container, Grid, Box } from '@material-ui/core';


const Home = () => (
    <>
        <Container>
            <h4>Pitchnotes</h4>
            <Container>
                <h3>New Stories</h3>
                <p>New Stories here...</p>
            </Container>
            <Container>
                <h3>Top/Most Read Stories</h3>
                <p>Top/Most Read Stories here...</p>
            </Container>
        </Container>
        <Box display="flex" flexDirection="row">
            <Container>
            <h4>League Table</h4>
                <h3>Table</h3>
                <p>Table here...</p>
            </Container>
            <Container>
                <h3>Recent Scores</h3>
                <p>Results here...</p>
            </Container>
            <Container>
                <h3>Top Scorers</h3>
                <p>Top Scorers here...</p>
            </Container>
        </Box>
    </>

);

export default Home;