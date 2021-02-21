// import { Link } from 'react-router-dom';
import { Table, Container, Link, Button, Paper } from '@material-ui/core';



const Author = ({ author }) => {

    if (!author) {
        return <p>Loading...</p>
    }

    const url = "/authors/" + author.id;

    return (
        <Button href={url}>
            <Paper variant="outlined" elevation={3} >
            <h3>{author.name}</h3>
            </Paper>
        </Button>
    )
}

export default Author;