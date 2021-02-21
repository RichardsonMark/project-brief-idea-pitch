// import { Link } from 'react-router-dom';
import { Table, Container, Link, Paper } from '@material-ui/core';



const Author = ({ author }) => {

    if (!author) {
        return <p>Loading...</p>
    }

    const url = "/authors/" + author.id;

    return (
        <Container>
            <Paper >
            <Link href={url} className="name"><h3>{author.name}</h3></Link>
            </Paper>
        </Container>
    )
}

export default Author;