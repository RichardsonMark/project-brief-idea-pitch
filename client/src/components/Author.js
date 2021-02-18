import { Link } from 'react-router-dom';
import { Table } from '@material-ui/core';



const Author = ({ author }) => {

    if (!author) {
        return <p>Loading...</p>
    }

    const url = "/authors/" + author.id;

    return (
        <>
            <p><Link to={url} className="name">{author.name}</Link></p>
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
        </>
    )
}

export default Author;