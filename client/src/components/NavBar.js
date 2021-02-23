// import { Link, useHistory } from "react-router-dom";
import { Button, ButtonGroup } from '@material-ui/core';



const NavBar = () => {
    // const history = useHistory();

    // const goBack = () => {
    //     history.goBack();
    // }

    return (
        <>
            <h1>Pitch Notes - Keep 'In Touch' with football</h1>
            <ButtonGroup size="large" color="primary" aria-label="outlined primary button group">
                <Button color="default" href="/">Home</Button>
                <Button color="primary" href="/authors">Create/Edit Authors</Button>
                <Button color="secondary" href="/articles">Create/Edit Articles</Button>
            </ButtonGroup>
            {/* <Button variant="contained" color="default"><Link to="/">Home</Link></Button>
            <Button variant="contained" color="primary"><Link to="/authors">Create/Edit Authors</Link></Button>
            <Button variant="contained" color="secondary"><Link to="/articles">Create/Edit Articles</Link></Button> */}
            {/* <Button variant="contained" onClick={goBack}>Back</Button> */}
        </>
    );
}

export default NavBar;