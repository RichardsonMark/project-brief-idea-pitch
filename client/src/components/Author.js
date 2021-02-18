// import { Link } from 'react-router-dom';
import { Table } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



const Author = ({ author }) => {

    if (!author) {
        return <p>Loading...</p>
    }

    const url = "/authors/" + author.id;

    return (
        <Container>
            <Link href={url} className="name"><h3>{author.name}</h3></Link>
            {/* <Table>
                <Table.Body>
                    {articles.map((authorArticles) => {
                        return (
                            <Table.Row key={authorArticles.id}>
                                <Table.Cell><Link to={url2} className="name">{authorArticles.headline}</Link></Table.Cell>
                                <Table.Cell>{authorArticles.lede}</Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table> */}
        </Container>
    )
}

export default Author;