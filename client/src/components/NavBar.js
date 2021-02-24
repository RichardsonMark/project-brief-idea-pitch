// import { useHistory } from "react-router-dom";
import { Button, ButtonGroup, Container } from '@material-ui/core';



const NavBar = () => {
    // const history = useHistory();

    // const goBack = () => {
    //     history.goBack();
    // }

    return (
        <Container fixed maxWidth="sm">
            <div className="nav-bar">
                <ButtonGroup size="large" variant="contained" color="primary" aria-label="contained primary button group">
                    <Button href="/">Home</Button>
                    <Button href="/authors">Create/Edit Authors</Button>
                    <Button href="/articles">Create/Edit Articles</Button>
                </ButtonGroup>
            </div>
        </Container>
    );
}

export default NavBar;