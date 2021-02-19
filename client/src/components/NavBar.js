import { Link, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';



const NavBar = () => {
    // const history = useHistory();

    // const goBack = () => {
    //     history.goBack();
    // }

    return (
        <>
            <h1>Pitch Notes - Keep 'In Touch' with football</h1>
            <Button variant="contained" color="primary"><Link to="/">Home</Link></Button>
            <Button variant="contained" color="primary"><Link to="/authors">Create/Edit Authors</Link></Button>
            <Button variant="contained" color="primary"><Link to="/articles">Create/Edit Articles</Link></Button>
            {/* <Button variant="contained" onClick={goBack}>Back</Button> */}
        </>
    );
}

export default NavBar;